/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
// const token="skLp1I1qORMWQOFDI0RS2jK447RNY0yrA2dWL7K8OishY8WpVwfQs4hlAT23fZTStRbTc9stqcQjgd4d7Xgy3mBXiRWji36qg6sssAU7c7jf6npfWKusBgXEEul6T7tckvVsxYIRFOUJ1nesGMAnbcqnC1K5snRRV53TVHJUx9bKhk11E8yc"

export default defineCliConfig({ api: { projectId, dataset} })
