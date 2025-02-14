import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

/**
 * A small helper to determine if a file is an image by extension.
 */
function isImageFile(filename) {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
  const ext = path.extname(filename).toLowerCase()
  return validExtensions.includes(ext)
}

/**
 * Customize this array to match the *exact* names of your folders.
 * The sort will follow this order first; any folders not in this list
 * will fall back to alphabetical at the end.
 */
const desiredOrder = [
  "Oxford Summer Program",
  "Oxford China Summer Program",
  "Executive Summer Program",
  "Campus",
  "Dining",
  "Certificates",
  "Trips",
  "Fun",
  "Debating",
  "Miscellneous", 
  "Miscellaneous1"
  // ... etc. (add or remove as needed)
];

export async function GET() {
  try {
    // Path to the gallery folder inside "public"
    const galleryDir = path.join(process.cwd(), 'public', 'photogallery')
    
    // Get a list of all items in the galleryDir
    const folderNames = fs.readdirSync(galleryDir, { withFileTypes: true })
      // Filter only directories
      .filter((dirent) => dirent.isDirectory())
      // Map to their actual folder names
      .map((dirent) => dirent.name)

    // Build the sections array
    let sections = folderNames.map((folder) => {
      const folderPath = path.join(galleryDir, folder)

      // List all the files inside the subfolder
      const files = fs.readdirSync(folderPath, { withFileTypes: true })

      // Filter only image files
      const images = files
        .filter((file) => file.isFile() && isImageFile(file.name))
        .map((imgFile) => {
          return {
            src: `/photogallery/${folder}/${imgFile.name}`,
            alt: imgFile.name,
          }
        })

      return {
        name: folder,
        images,
      }
    })

    // Sort the sections by our desiredOrder array:
    sections.sort((a, b) => {
      const indexA = desiredOrder.indexOf(a.name)
      const indexB = desiredOrder.indexOf(b.name)

      // If both folders are in desiredOrder, sort by that index
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB
      }
      // If only one is in the array, that one goes first
      if (indexA !== -1 && indexB === -1) {
        return -1
      }
      if (indexA === -1 && indexB !== -1) {
        return 1
      }
      // If neither is in the array, fallback to alphabetical
      return a.name.localeCompare(b.name)
    })

    return NextResponse.json(sections, { status: 200 })
  } catch (error) {
    console.error('Error reading gallery folders:', error)
    return NextResponse.json({ error: 'Unable to read gallery folders' }, { status: 500 })
  }
}
