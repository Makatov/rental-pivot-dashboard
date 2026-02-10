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
  { id: 'd883fe64-1064-423b-be3d-3da23feabc22', brand: 'Burberry', category: 'Shoes', priceKzt: 29500, priceUsd: 61, imagePath: '33e1306b-695b-4773-982b-d71d36b7e3c7.webp', imageUrl: img('d883fe64-1064-423b-be3d-3da23feabc22', '33e1306b-695b-4773-982b-d71d36b7e3c7.webp') },
  // Dolce & Gabbana (shoes only)
  { id: 'b8997959-aca4-4325-a442-15f7e1e0d1b4', brand: 'Dolce Gabbana', category: 'Shoes', priceKzt: 369900, priceUsd: 771, imagePath: '4b256838-e4a6-4e68-9ded-cb69f4ee4cb3.webp', imageUrl: img('b8997959-aca4-4325-a442-15f7e1e0d1b4', '4b256838-e4a6-4e68-9ded-cb69f4ee4cb3.webp') },
  { id: '899ef168-b78b-4e0d-bf0f-68b107cf515f', brand: 'Dolce Gabbana', category: 'Sunglasses', priceKzt: 153900, priceUsd: 321, imagePath: '8bd69c0e-93b5-4783-aa36-db56a5d47a7c.webp', imageUrl: img('899ef168-b78b-4e0d-bf0f-68b107cf515f', '8bd69c0e-93b5-4783-aa36-db56a5d47a7c.webp') },
  { id: 'f76c7da8-ff39-41e5-a972-cf80cf87e4ac', brand: 'Dolce Gabbana', category: 'Sneakers', priceKzt: 118400, priceUsd: 247, imagePath: '53082684-a787-48be-87b8-68bfcab021cb.webp', imageUrl: img('f76c7da8-ff39-41e5-a972-cf80cf87e4ac', '53082684-a787-48be-87b8-68bfcab021cb.webp') },
  { id: '389297f2-96c2-4a97-9cb0-3b40adf629e7', brand: 'Dolce Gabbana', category: 'Boots', priceKzt: 102700, priceUsd: 214, imagePath: 'f5d02b70-a8ae-4a3a-a67a-10137fed093b.webp', imageUrl: img('389297f2-96c2-4a97-9cb0-3b40adf629e7', 'f5d02b70-a8ae-4a3a-a67a-10137fed093b.webp') },
  // Gucci (updated image paths from DB)
  { id: '1c2fb96d-89ae-41d8-a0fe-429b5310eda2', brand: 'Gucci', category: 'Boots', priceKzt: 272200, priceUsd: 567, imagePath: '6a2d9d30-c8d9-474b-ad1e-51938b109c02.webp', imageUrl: img('1c2fb96d-89ae-41d8-a0fe-429b5310eda2', '6a2d9d30-c8d9-474b-ad1e-51938b109c02.webp') },
  { id: 'df81f300-ce34-43cc-a093-2652c411cc04', brand: 'Gucci', category: 'Sneakers', priceKzt: 224800, priceUsd: 468, imagePath: '5a1a247e-62b5-44bd-9618-701b396c7ae2.webp', imageUrl: img('df81f300-ce34-43cc-a093-2652c411cc04', '5a1a247e-62b5-44bd-9618-701b396c7ae2.webp') },
  { id: '069e6b67-20c6-4a26-84d6-125f2275ed13', brand: 'Gucci', category: 'Shoes', priceKzt: 160600, priceUsd: 335, imagePath: 'd7180aa3-49e9-4b17-abf1-65934bde0880.webp', imageUrl: img('069e6b67-20c6-4a26-84d6-125f2275ed13', 'd7180aa3-49e9-4b17-abf1-65934bde0880.webp') },
  { id: '8b83ed5b-20ad-425d-be65-619312a94a76', brand: 'Gucci', category: 'Sneakers', priceKzt: 98600, priceUsd: 205, imagePath: '3f2ef4b2-f204-43a1-8ac6-c99e095bfc2f.webp', imageUrl: img('8b83ed5b-20ad-425d-be65-619312a94a76', '3f2ef4b2-f204-43a1-8ac6-c99e095bfc2f.webp') },
  // Max Mara (sunglasses + sneakers)
  { id: '7e9b961b-479f-4abe-869f-0428c5d9c318', brand: 'Max Mara', category: 'Sunglasses', priceKzt: 118400, priceUsd: 247, imagePath: '04d9c0d4-8033-4171-bff8-c945ed9eb81e.webp', imageUrl: img('7e9b961b-479f-4abe-869f-0428c5d9c318', '04d9c0d4-8033-4171-bff8-c945ed9eb81e.webp') },
  { id: '0371520f-472f-498d-9e4a-4ad5dbd7c699', brand: 'Max Mara', category: 'Shoes', priceKzt: 53100, priceUsd: 111, imagePath: '9efcaf39-f03d-4636-b570-83eee97c551f.webp', imageUrl: img('0371520f-472f-498d-9e4a-4ad5dbd7c699', '9efcaf39-f03d-4636-b570-83eee97c551f.webp') },
  // Valentino (shoes/boots only)
  { id: '6018f361-54fe-4b71-8f96-bcf65b2d89a1', brand: 'Valentino', category: 'Boots', priceKzt: 188100, priceUsd: 392, imagePath: '587f6c64-ed19-4fe7-9ad6-b79d948398fb.webp', imageUrl: img('6018f361-54fe-4b71-8f96-bcf65b2d89a1', '587f6c64-ed19-4fe7-9ad6-b79d948398fb.webp') },
  { id: '89d07221-7f77-4bb9-8549-654abf42c845', brand: 'Valentino', category: 'Shoes', priceKzt: 152700, priceUsd: 318, imagePath: 'a7f746e3-6232-4e8f-bd4f-ad096c02d8e8.webp', imageUrl: img('89d07221-7f77-4bb9-8549-654abf42c845', 'a7f746e3-6232-4e8f-bd4f-ad096c02d8e8.webp') },
  { id: 'e3ff56e5-b465-4243-b460-dd47d97b3072', brand: 'Valentino', category: 'Sneakers', priceKzt: 118400, priceUsd: 247, imagePath: '0644c3e9-0642-46fd-b9c4-aaaac4fac816.webp', imageUrl: img('e3ff56e5-b465-4243-b460-dd47d97b3072', '0644c3e9-0642-46fd-b9c4-aaaac4fac816.webp') },
  // Stella McCartney (updated paths from DB)
  { id: '9303435f-0644-4a14-bce4-dee574a6432a', brand: 'Stella McCartney', category: 'Boots', priceKzt: 82900, priceUsd: 173, imagePath: '1c822dcf-6dfb-49cb-9b60-ba5c55ea13cd.webp', imageUrl: img('9303435f-0644-4a14-bce4-dee574a6432a', '1c822dcf-6dfb-49cb-9b60-ba5c55ea13cd.webp') },
  { id: 'bffcde78-8e4f-490b-adc2-569d82307253', brand: 'Stella McCartney', category: 'Sneakers', priceKzt: 71100, priceUsd: 148, imagePath: 'd64896c9-f68d-4972-b4fd-8dda442600f6.webp', imageUrl: img('bffcde78-8e4f-490b-adc2-569d82307253', 'd64896c9-f68d-4972-b4fd-8dda442600f6.webp') },
  // Fendi
  { id: '6c059817-dd4e-4868-b524-78fd2fd3728b', brand: 'Fendi', category: 'Boots', priceKzt: 224900, priceUsd: 469, imagePath: '3627a4bf-e834-4ba9-89dc-b837c421ae34.webp', imageUrl: img('6c059817-dd4e-4868-b524-78fd2fd3728b', '3627a4bf-e834-4ba9-89dc-b837c421ae34.webp') },
  { id: 'cb4a0e08-b719-4bb3-bea1-0243e3953089', brand: 'Fendi', category: 'Sneakers', priceKzt: 106600, priceUsd: 222, imagePath: 'b844dc33-3788-4b42-aefd-df0edc54a751.webp', imageUrl: img('cb4a0e08-b719-4bb3-bea1-0243e3953089', 'b844dc33-3788-4b42-aefd-df0edc54a751.webp') },
  // Extra Dior
  { id: '5ef46cb3-cbeb-438a-b799-ac061ad4e8ba', brand: 'Dior', category: 'Boots', priceKzt: 259300, priceUsd: 540, imagePath: 'a9ec6e0b-cbc7-4e7b-8161-050fa581889c.webp', imageUrl: img('5ef46cb3-cbeb-438a-b799-ac061ad4e8ba', 'a9ec6e0b-cbc7-4e7b-8161-050fa581889c.webp') },
  { id: 'f553f592-07de-45d4-bb84-1de8219416be', brand: 'Dior', category: 'Sneakers', priceKzt: 79000, priceUsd: 165, imagePath: '6de0b2fb-e1ec-4b19-b697-e56037a9c6a4.webp', imageUrl: img('f553f592-07de-45d4-bb84-1de8219416be', '6de0b2fb-e1ec-4b19-b697-e56037a9c6a4.webp') },
]

export const rotateBrands = ['Burberry', 'Gucci', 'Max Mara', 'Stella McCartney', 'Valentino', 'Christian Louboutin', 'Dolce Gabbana']
export const editBrands = ['Dior', 'Brunello Cucinelli', 'Prada', 'Christian Louboutin', 'Fendi']
