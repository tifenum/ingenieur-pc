"use server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dxmatiufa",
  api_key: "976288146655975",
  api_secret: "XdBBCwnKS1He6skuycaqZgnOsDI",
});

export async function getCloudinaryProducts() {
  try {
    const result = await cloudinary.search
      .expression("tags:marketplace")
      .with_field("context")
      .with_field("tags")
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    if (!result || !result.resources) return [];

    const groupedProducts: { [key: string]: any } = {};

    result.resources.forEach((resource: any) => {
      const ctx = resource.context || {};
      
      // Look for the specific group tag (e.g., "marketplace_1718912345678")
      const groupTag = resource.tags.find((tag: string) => tag.startsWith("marketplace_"));
      const groupId = groupTag ? groupTag.replace("marketplace_", "") : resource.public_id;

      if (!groupedProducts[groupId]) {
        groupedProducts[groupId] = {
          id: groupId,
          title: ctx.title || "Ordinateur sans nom",
          price: parseFloat(ctx.price) || 0,
          description: ctx.description || "Aucune description fournie.",
          images: [],
        };
      }
      
      groupedProducts[groupId].images.push(resource.secure_url);
    });

    return Object.values(groupedProducts);
  } catch (error) {
    console.error("Server Action Cloudinary Fetch Failure:", error);
    return [];
  }
}


// Add this function to the bottom of app/marketplace/actions.ts

// Replace the delete function in app/marketplace/actions.ts with this:

export async function deleteCloudinaryProduct(groupId: string | number) {
  try {
    // Force conversion to a clean string format to avoid numeric parameter truncation bugs
    const cleanGroupId = String(groupId);
    const searchTag = `marketplace_${cleanGroupId}`;

    console.log("Searching for cloud resources with tag:", searchTag);

    // 1. Find all images tagged under this specific marketplace PC bundle item
    const result = await cloudinary.search
      .expression(`tags:${searchTag}`)
      .execute();

    if (!result || !result.resources || result.resources.length === 0) {
      console.log("No images found with tag expression:", searchTag);
      return { success: false, message: "Aucune image trouvée pour ce PC dans le cloud." };
    }

    // 2. Map all public asset IDs safely
    const publicIds = result.resources.map((resource: any) => resource.public_id);
    console.log("Found assets to delete from cloud storage:", publicIds);

    // 3. Purge the resources completely from Cloudinary's servers
    await cloudinary.api.delete_resources(publicIds);

    return { success: true, message: "Le PC a été entièrement effacé avec succès." };
  } catch (error) {
    console.error("Server Action Cloudinary Delete Failure:", error);
    return { success: false, message: "Erreur serveur lors de la suppression." };
  }
}