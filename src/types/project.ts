export interface Project {
  id: string // Unique identifier for the project
  name: string // Name of the project
  description: string // Short description of the project
  image: string // URL to the project's image
  category: 'DeFi' | 'NFT' | 'DAO' // Category, restricted to specific values
  totalDonations: string // Total donations as a string (can be converted to a number if needed)
  contributors: number // Number of contributors
  status: 'active' | 'inactive' // Status of the project
}
