import { services } from "./data";

export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  serviceId: string;
  subService: string;
  folderName: string;
}

export interface ServiceFolder {
  serviceId: string;
  serviceName: string;
  folderName: string;
  subService: string;
  imageCount: number;
}

// Map sub-service names to folder names
function normalizeFolderName(subService: string): string {
  return subService
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, '') // Remove spaces
    .trim();
}

// Get all service folders
export function getServiceFolders(): ServiceFolder[] {
  const folders: ServiceFolder[] = [];
  
  services.forEach(service => {
    service.subServices.forEach(subService => {
      const folderName = normalizeFolderName(subService);
      folders.push({
        serviceId: service.id,
        serviceName: service.title,
        folderName: folderName,
        subService: subService,
        imageCount: 0 // This would be dynamic based on actual folder contents
      });
    });
  });
  
  return folders;
}

// Generate portfolio items from service folders
export function generatePortfolioFromServices(): any[] {
  const portfolioItems: any[] = [];
  let idCounter = 1;
  
  services.forEach(service => {
    service.subServices.forEach((subService, index) => {
      const folderName = normalizeFolderName(subService);
      const folderPath = `/${folderName}`;
      
      // Create multiple portfolio items per sub-service (for demonstration)
      // In reality, you'd read the actual images from the folder
      for (let i = 1; i <= 3; i++) {
        portfolioItems.push({
          id: `auto_${service.id}_${folderName}_${idCounter}`,
          title: `${subService} - Example ${i}`,
          description: `Professional ${subService.toLowerCase()} work from our ${service.title} service`,
          division: service.division,
          category: service.title,
          subCategory: subService,
          folderName: folderName,
          imagePath: `${folderPath}/image${i}.jpg`,
          mediaType: "image",
          year: 2023 + (index % 3),
          serviceId: service.id,
          tags: [service.title, subService, ...service.subServices.filter(s => s !== subService)]
        });
        idCounter++;
      }
    });
  });
  
  return portfolioItems;
}

// Get portfolio by service
export function getPortfolioByService(serviceId: string) {
  return generatePortfolioFromServices().filter(item => item.serviceId === serviceId);
}

// Get portfolio by sub-service
export function getPortfolioBySubService(serviceId: string, subService: string) {
  const normalizedSubService = normalizeFolderName(subService);
  return generatePortfolioFromServices().filter(item => 
    item.serviceId === serviceId && item.folderName === normalizedSubService
  );
}

// Get unique categories from services
export function getServiceCategories() {
  return [...new Set(services.map(service => service.title))];
}

// Get sub-categories for a specific service
export function getSubCategoriesForService(serviceId: string) {
  const service = services.find(s => s.id === serviceId);
  return service ? service.subServices : [];
}

// Mock function to get images from a folder (for development)
export async function getImagesFromFolder(folderName: string): Promise<string[]> {
  // In production, you would read from the actual folder
  // For now, return mock image URLs
  const normalizedFolder = normalizeFolderName(folderName);
  return [
    `/${normalizedFolder}/image1.jpg`,
    `/${normalizedFolder}/image2.jpg`,
    `/${normalizedFolder}/image3.jpg`,
    `/${normalizedFolder}/image4.jpg`,
  ];
}