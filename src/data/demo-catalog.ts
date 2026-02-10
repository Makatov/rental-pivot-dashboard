import { DemoCatalogItem } from '@/types'

const CDN_BASE = 'https://static.flimod.com/images/sku'

function img(skuId: string, path: string) {
  return `${CDN_BASE}/${skuId}/${path}`
}

export const demoCatalog: DemoCatalogItem[] = [
  // === ÉDIT brands (premium) ===
  // Dior
  { id: 'cad20071-3327-469f-b584-dcf8f991b0a4', brand: 'Dior', category: 'Boots', priceKzt: 756200, priceUsd: 1575, imagePath: '34c702fa-4aaf-4604-aac2-c8829a1240b2.webp', imageUrl: img('cad20071-3327-469f-b584-dcf8f991b0a4', '34c702fa-4aaf-4604-aac2-c8829a1240b2.webp') },
  { id: '7d869255-5dc0-4bcb-be28-83eb7531bcfb', brand: 'Dior', category: 'Sneakers', priceKzt: 297400, priceUsd: 620, imagePath: 'bb04edd9-d86d-42ef-be92-227d741ed815.webp', imageUrl: img('7d869255-5dc0-4bcb-be28-83eb7531bcfb', 'bb04edd9-d86d-42ef-be92-227d741ed815.webp') },
  { id: 'd81648a4-f1b7-4e4c-8ae5-e50e5eed8c04', brand: 'Dior', category: 'Sneakers', priceKzt: 177600, priceUsd: 370, imagePath: '703836b5-9fa6-4f89-a4f3-4c0a20a82f45.webp', imageUrl: img('d81648a4-f1b7-4e4c-8ae5-e50e5eed8c04', '703836b5-9fa6-4f89-a4f3-4c0a20a82f45.webp') },
  { id: 'bb9a1ed8-b286-4db3-a59f-8c3ab9210e1a', brand: 'Dior', category: 'Sunglasses', priceKzt: 124700, priceUsd: 260, imagePath: 'e7de2ddd-7540-4d86-8ec5-60f14994ab15.webp', imageUrl: img('bb9a1ed8-b286-4db3-a59f-8c3ab9210e1a', 'e7de2ddd-7540-4d86-8ec5-60f14994ab15.webp') },
  // Prada
  { id: '425b9f56-9117-4622-ad68-9b62babc4944', brand: 'Prada', category: 'Sunglasses', priceKzt: 118400, priceUsd: 247, imagePath: 'a1d7fd29-33c5-4332-841c-e467d8ff31ae.webp', imageUrl: img('425b9f56-9117-4622-ad68-9b62babc4944', 'a1d7fd29-33c5-4332-841c-e467d8ff31ae.webp') },
  { id: '4615a783-0c02-4f93-8dec-8b15fa057bb6', brand: 'Prada', category: 'Shoes', priceKzt: 29600, priceUsd: 62, imagePath: 'd327a1e6-5866-4300-bd1c-04a0533309d5.webp', imageUrl: img('4615a783-0c02-4f93-8dec-8b15fa057bb6', 'd327a1e6-5866-4300-bd1c-04a0533309d5.webp') },
  // Christian Louboutin
  { id: '62e35500-6b7b-4fcf-898e-cc78148655dd', brand: 'Christian Louboutin', category: 'Boots', priceKzt: 443800, priceUsd: 925, imagePath: '2916d805-0893-4e9e-a4f2-d0e34cd3a066.webp', imageUrl: img('62e35500-6b7b-4fcf-898e-cc78148655dd', '2916d805-0893-4e9e-a4f2-d0e34cd3a066.webp') },
  { id: '16b178f2-573d-49ed-9abb-96e105b5cacf', brand: 'Christian Louboutin', category: 'Shoes', priceKzt: 186000, priceUsd: 388, imagePath: '342efb73-a8b7-4a64-90dc-af54d71ec06a.webp', imageUrl: img('16b178f2-573d-49ed-9abb-96e105b5cacf', '342efb73-a8b7-4a64-90dc-af54d71ec06a.webp') },
  { id: '861cfd52-3d4d-469b-8dc0-32168eddb148', brand: 'Christian Louboutin', category: 'Shoes', priceKzt: 142900, priceUsd: 298, imagePath: '965ceffd-cfa6-477c-a2f9-a8ec21a07c13.webp', imageUrl: img('861cfd52-3d4d-469b-8dc0-32168eddb148', '965ceffd-cfa6-477c-a2f9-a8ec21a07c13.webp') },
  { id: 'd92dbe67-bfe1-49d7-92b7-fa8cef268a0d', brand: 'Christian Louboutin', category: 'Shoes', priceKzt: 126300, priceUsd: 263, imagePath: '27f05249-acb7-4bc3-9fca-3f27e2650f00.webp', imageUrl: img('d92dbe67-bfe1-49d7-92b7-fa8cef268a0d', '27f05249-acb7-4bc3-9fca-3f27e2650f00.webp') },
  // Brunello Cucinelli
  { id: '8ee98c7b-e2d4-4910-ad73-9dbdef8fed3c', brand: 'Brunello Cucinelli', category: 'Shoes', priceKzt: 248600, priceUsd: 518, imagePath: 'cdc0894c-3773-4414-b23e-6f5e5430ca2e.webp', imageUrl: img('8ee98c7b-e2d4-4910-ad73-9dbdef8fed3c', 'cdc0894c-3773-4414-b23e-6f5e5430ca2e.webp') },
  { id: 'fec53a13-59dd-4eda-9b69-fdc47ff8ab2a', brand: 'Brunello Cucinelli', category: 'Boots', priceKzt: 124200, priceUsd: 259, imagePath: 'bfa5efbe-96a9-4098-aa7f-73fae25ee446.webp', imageUrl: img('fec53a13-59dd-4eda-9b69-fdc47ff8ab2a', 'bfa5efbe-96a9-4098-aa7f-73fae25ee446.webp') },
  // Fendi
  { id: '0467ba80-f7aa-4fa7-a956-4c14577698d5', brand: 'Fendi', category: 'Boots', priceKzt: 369900, priceUsd: 771, imagePath: 'a76a4849-265e-4507-90dd-010b90884971.webp', imageUrl: img('0467ba80-f7aa-4fa7-a956-4c14577698d5', 'a76a4849-265e-4507-90dd-010b90884971.webp') },

  // === rotate brands (accessible) ===
  // Burberry
  { id: 'e3d6f3df-7607-483d-8df6-bd96d76d68a5', brand: 'Burberry', category: 'Shoes', priceKzt: 236700, priceUsd: 493, imagePath: 'f79bb3d9-0dde-4932-85f2-69420991c61a.webp', imageUrl: img('e3d6f3df-7607-483d-8df6-bd96d76d68a5', 'f79bb3d9-0dde-4932-85f2-69420991c61a.webp') },
  { id: 'd0c00e93-9ede-40b1-9e76-c4ac26844210', brand: 'Burberry', category: 'Boots', priceKzt: 69000, priceUsd: 144, imagePath: '042c7c4d-402c-41a8-8c52-e624d62f0cf0.webp', imageUrl: img('d0c00e93-9ede-40b1-9e76-c4ac26844210', '042c7c4d-402c-41a8-8c52-e624d62f0cf0.webp') },
  { id: '3c486b16-c377-4909-9d5c-417f0d469d94', brand: 'Burberry', category: 'Sneakers', priceKzt: 41500, priceUsd: 87, imagePath: '89f08f1e-de10-487a-92a8-0d24e5a93b6b.webp', imageUrl: img('3c486b16-c377-4909-9d5c-417f0d469d94', '89f08f1e-de10-487a-92a8-0d24e5a93b6b.webp') },
  // Dolce & Gabbana — need to check brand name
  { id: '0021cac8-c3c1-48e2-9bd5-31e584f93f92', brand: 'Dolce Gabbana', category: 'Shirts', priceKzt: 45000, priceUsd: 94, imagePath: 'b1be6dbd-1da7-4ab6-ab1a-2a8c39597585.webp', imageUrl: img('0021cac8-c3c1-48e2-9bd5-31e584f93f92', 'b1be6dbd-1da7-4ab6-ab1a-2a8c39597585.webp') },
  // Gucci
  { id: '017f1a4c-6ad8-4f98-937e-323c8bc620f4', brand: 'Gucci', category: 'Boots', priceKzt: 118400, priceUsd: 247, imagePath: 'f7fe482e-376b-430a-b1dc-06609f37d43b.webp', imageUrl: img('017f1a4c-6ad8-4f98-937e-323c8bc620f4', 'f7fe482e-376b-430a-b1dc-06609f37d43b.webp') },
  { id: '069e6b67-20c6-4a26-84d6-125f2275ed13', brand: 'Gucci', category: 'Shoes', priceKzt: 160600, priceUsd: 335, imagePath: '75fb30e2-2a09-4467-b7c8-1e065a32f1d0.webp', imageUrl: img('069e6b67-20c6-4a26-84d6-125f2275ed13', '75fb30e2-2a09-4467-b7c8-1e065a32f1d0.webp') },
  // Max Mara
  { id: '0371520f-472f-498d-9e4a-4ad5dbd7c699', brand: 'Max Mara', category: 'Shoes', priceKzt: 53100, priceUsd: 111, imagePath: '9efcaf39-f03d-4636-b570-83eee97c551f.webp', imageUrl: img('0371520f-472f-498d-9e4a-4ad5dbd7c699', '9efcaf39-f03d-4636-b570-83eee97c551f.webp') },
  // Valentino
  { id: '04af0b11-a696-43ee-b98e-8dcdec759f63', brand: 'Valentino', category: 'Dresses', priceKzt: 59100, priceUsd: 123, imagePath: '97381618-9d37-4865-aae6-40837daae34b.webp', imageUrl: img('04af0b11-a696-43ee-b98e-8dcdec759f63', '97381618-9d37-4865-aae6-40837daae34b.webp') },
  // Stella McCartney
  { id: '0756ebbe-862e-410b-8a5a-94a175dc0a6a', brand: 'Stella McCartney', category: 'Boots', priceKzt: 71100, priceUsd: 148, imagePath: 'c4443a59-2f55-40e5-9e30-7d047ac4a7a4.webp', imageUrl: img('0756ebbe-862e-410b-8a5a-94a175dc0a6a', 'c4443a59-2f55-40e5-9e30-7d047ac4a7a4.webp') },
  // Extra Louboutin for rotate
  { id: '3b6f5275-b0c8-42e2-89e1-2b97ab7da9ca', brand: 'Christian Louboutin', category: 'Shoes', priceKzt: 79000, priceUsd: 165, imagePath: '97d722f8-01ba-4d65-91c1-ab4762a46b68.webp', imageUrl: img('3b6f5275-b0c8-42e2-89e1-2b97ab7da9ca', '97d722f8-01ba-4d65-91c1-ab4762a46b68.webp') },
  { id: '1a2d8c1f-099b-451b-9bdf-78d0d7dbb230', brand: 'Christian Louboutin', category: 'Shoes', priceKzt: 88800, priceUsd: 185, imagePath: '37c53035-4cf9-4408-a65d-e23190712098.webp', imageUrl: img('1a2d8c1f-099b-451b-9bdf-78d0d7dbb230', '37c53035-4cf9-4408-a65d-e23190712098.webp') },
  // Extra Dior
  { id: '5ef46cb3-cbeb-438a-b799-ac061ad4e8ba', brand: 'Dior', category: 'Boots', priceKzt: 259300, priceUsd: 540, imagePath: 'a9ec6e0b-cbc7-4e7b-8161-050fa581889c.webp', imageUrl: img('5ef46cb3-cbeb-438a-b799-ac061ad4e8ba', 'a9ec6e0b-cbc7-4e7b-8161-050fa581889c.webp') },
  { id: 'f553f592-07de-45d4-bb84-1de8219416be', brand: 'Dior', category: 'Sneakers', priceKzt: 79000, priceUsd: 165, imagePath: '6de0b2fb-e1ec-4b19-b697-e56037a9c6a4.webp', imageUrl: img('f553f592-07de-45d4-bb84-1de8219416be', '6de0b2fb-e1ec-4b19-b697-e56037a9c6a4.webp') },
  // Extra Burberry
  { id: 'cdd01957-83d5-492e-bc45-fa04e8fefda6', brand: 'Burberry', category: 'Shoes', priceKzt: 50900, priceUsd: 106, imagePath: '229f994b-955f-4d4e-be7c-c2ce709752e0.webp', imageUrl: img('cdd01957-83d5-492e-bc45-fa04e8fefda6', '229f994b-955f-4d4e-be7c-c2ce709752e0.webp') },
  { id: '60c464fb-fce3-4c97-bda3-24c45a4c7f09', brand: 'Burberry', category: 'Sneakers', priceKzt: 34400, priceUsd: 72, imagePath: 'fc65e67b-c079-4548-9016-deff8ff3ebf6.webp', imageUrl: img('60c464fb-fce3-4c97-bda3-24c45a4c7f09', 'fc65e67b-c079-4548-9016-deff8ff3ebf6.webp') },
]

export const rotateBrands = ['Burberry', 'Gucci', 'Max Mara', 'Stella McCartney', 'Valentino', 'Christian Louboutin', 'Dolce Gabbana']
export const editBrands = ['Dior', 'Brunello Cucinelli', 'Prada', 'Christian Louboutin', 'Fendi']
