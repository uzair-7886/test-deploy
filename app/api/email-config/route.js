// /app/api/email-config/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path to your email configuration JSON file
const configPath = path.resolve('./config/emailConfig.json');

export async function GET(request) {
  try {
    // Read the JSON configuration file
    const fileContent = await fs.promises.readFile(configPath, 'utf-8');
    const emailConfig = JSON.parse(fileContent);
    // Return the entire config so the client has all email templates
    return NextResponse.json(emailConfig);
  } catch (error) {
    console.error('Error reading email config:', error);
    return NextResponse.json(
      { error: 'Error reading email config' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Get the updated configuration from the request body
    const updatedConfig = await request.json();
    // Write the updated configuration back to the file with 2-space indent formatting
    await fs.promises.writeFile(configPath, JSON.stringify(updatedConfig, null, 2));
    return NextResponse.json({ message: 'Email config updated successfully.' });
  } catch (error) {
    console.error('Error updating email config:', error);
    return NextResponse.json(
      { error: 'Error updating email config' },
      { status: 500 }
    );
  }
}
