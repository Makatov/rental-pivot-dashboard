import { DemoCatalogItem } from '@/types'

const CDN_BASE = 'https://static.flimod.com/images/sku'

function img(skuId: string, path: string) {
  return `${CDN_BASE}/${skuId}/${path}`
}

export const demoCatalog: DemoCatalogItem[] = [
  { id: '0013fe04-6e7c-4de3-9e9c-9e9f6aa3a62d', brand: 'Prada', category: 'Dresses', priceKzt: 103400, priceUsd: 215, imagePath: 'd23d4b6c-3069-47ad-873c-cd006c5d1c14.webp', imageUrl: img('0013fe04-6e7c-4de3-9e9c-9e9f6aa3a62d', 'd23d4b6c-3069-47ad-873c-cd006c5d1c14.webp') },
  { id: '0021cac8-c3c1-48e2-9bd5-31e584f93f92', brand: 'Dolce Gabbana', category: 'Shirts', priceKzt: 45000, priceUsd: 94, imagePath: 'b1be6dbd-1da7-4ab6-ab1a-2a8c39597585.webp', imageUrl: img('0021cac8-c3c1-48e2-9bd5-31e584f93f92', 'b1be6dbd-1da7-4ab6-ab1a-2a8c39597585.webp') },
  { id: '00edf58b-5f75-4d99-a560-28ac29bafd34', brand: 'Christian Louboutin', category: 'Shoes', priceKzt: 54500, priceUsd: 114, imagePath: '6b9d23b7-c783-4a70-91ea-c48f8aeec34b.webp', imageUrl: img('00edf58b-5f75-4d99-a560-28ac29bafd34', '6b9d23b7-c783-4a70-91ea-c48f8aeec34b.webp') },
  { id: '0108ba39-d376-480b-beed-bffd4626b55d', brand: 'Dolce Gabbana', category: 'T-shirts', priceKzt: 48300, priceUsd: 101, imagePath: '5271aa8b-cada-4537-8515-f3a7d97e17e9.webp', imageUrl: img('0108ba39-d376-480b-beed-bffd4626b55d', '5271aa8b-cada-4537-8515-f3a7d97e17e9.webp') },
  { id: '017f1a4c-6ad8-4f98-937e-323c8bc620f4', brand: 'Gucci', category: 'Boots', priceKzt: 118400, priceUsd: 247, imagePath: 'f7fe482e-376b-430a-b1dc-06609f37d43b.webp', imageUrl: img('017f1a4c-6ad8-4f98-937e-323c8bc620f4', 'f7fe482e-376b-430a-b1dc-06609f37d43b.webp') },
  { id: '031de12d-8736-471b-bd98-585e9fa2e47c', brand: 'Dolce Gabbana', category: 'Dresses', priceKzt: 295800, priceUsd: 616, imagePath: 'b53b6a36-4b08-46a8-b6d8-63a1eb57544e.webp', imageUrl: img('031de12d-8736-471b-bd98-585e9fa2e47c', 'b53b6a36-4b08-46a8-b6d8-63a1eb57544e.webp') },
  { id: '036f6c65-5253-4532-bba4-de483798bf41', brand: 'Dior', category: 'Accessories', priceKzt: 77000, priceUsd: 160, imagePath: '5c00d15c-855e-4cbf-9d66-8752dd15d7ee.webp', imageUrl: img('036f6c65-5253-4532-bba4-de483798bf41', '5c00d15c-855e-4cbf-9d66-8752dd15d7ee.webp') },
  { id: '0371520f-472f-498d-9e4a-4ad5dbd7c699', brand: 'Max Mara', category: 'Shoes', priceKzt: 53100, priceUsd: 111, imagePath: '9efcaf39-f03d-4636-b570-83eee97c551f.webp', imageUrl: img('0371520f-472f-498d-9e4a-4ad5dbd7c699', '9efcaf39-f03d-4636-b570-83eee97c551f.webp') },
  { id: '042f4871-5dba-45e9-8ba3-d0bd1ec5fc46', brand: 'Brunello Cucinelli', category: 'Tops', priceKzt: 177400, priceUsd: 370, imagePath: 'fc19cf9b-cd9c-463b-a8b0-97f75acf20ad.webp', imageUrl: img('042f4871-5dba-45e9-8ba3-d0bd1ec5fc46', 'fc19cf9b-cd9c-463b-a8b0-97f75acf20ad.webp') },
  { id: '0467ba80-f7aa-4fa7-a956-4c14577698d5', brand: 'Fendi', category: 'Boots', priceKzt: 369900, priceUsd: 771, imagePath: 'a76a4849-265e-4507-90dd-010b90884971.webp', imageUrl: img('0467ba80-f7aa-4fa7-a956-4c14577698d5', 'a76a4849-265e-4507-90dd-010b90884971.webp') },
  { id: '04af0b11-a696-43ee-b98e-8dcdec759f63', brand: 'Valentino', category: 'Dresses', priceKzt: 59100, priceUsd: 123, imagePath: '97381618-9d37-4865-aae6-40837daae34b.webp', imageUrl: img('04af0b11-a696-43ee-b98e-8dcdec759f63', '97381618-9d37-4865-aae6-40837daae34b.webp') },
  { id: '0503834f-9418-4832-956f-03bfc09a69df', brand: 'Max Mara', category: 'Dresses', priceKzt: 49800, priceUsd: 104, imagePath: '5da649d8-e373-4dbd-b256-0f2b582e4726.webp', imageUrl: img('0503834f-9418-4832-956f-03bfc09a69df', '5da649d8-e373-4dbd-b256-0f2b582e4726.webp') },
  { id: '05133769-2bcd-4d83-9db0-ded7dd3a3588', brand: 'Dolce Gabbana', category: 'Dresses', priceKzt: 153900, priceUsd: 321, imagePath: '58ae479b-39aa-41b9-a885-c587fb5f4369.webp', imageUrl: img('05133769-2bcd-4d83-9db0-ded7dd3a3588', '58ae479b-39aa-41b9-a885-c587fb5f4369.webp') },
  { id: '051d9a7a-67e2-448f-839d-3c4727d80616', brand: 'Burberry', category: 'Sweaters', priceKzt: 64900, priceUsd: 135, imagePath: 'd3158472-eaa3-46d1-863c-4277aad5b11e.webp', imageUrl: img('051d9a7a-67e2-448f-839d-3c4727d80616', 'd3158472-eaa3-46d1-863c-4277aad5b11e.webp') },
  { id: '05f71ab8-9dc6-4a55-9c29-a8f16dc87b6e', brand: 'Dior', category: 'Sneakers', priceKzt: 135300, priceUsd: 282, imagePath: 'dba75b39-a387-474c-a885-6d1eecbe89c1.webp', imageUrl: img('05f71ab8-9dc6-4a55-9c29-a8f16dc87b6e', 'dba75b39-a387-474c-a885-6d1eecbe89c1.webp') },
  { id: '069e6b67-20c6-4a26-84d6-125f2275ed13', brand: 'Gucci', category: 'Shoes', priceKzt: 160600, priceUsd: 335, imagePath: '75fb30e2-2a09-4467-b7c8-1e065a32f1d0.webp', imageUrl: img('069e6b67-20c6-4a26-84d6-125f2275ed13', '75fb30e2-2a09-4467-b7c8-1e065a32f1d0.webp') },
  { id: '06a1629d-9cee-46e0-b7f8-43d33434a8ab', brand: 'Louis Vuitton', category: 'Shoes', priceKzt: 93500, priceUsd: 195, imagePath: 'cf8c9b28-0cbe-461e-9ce1-2e1efab01c96.webp', imageUrl: img('06a1629d-9cee-46e0-b7f8-43d33434a8ab', 'cf8c9b28-0cbe-461e-9ce1-2e1efab01c96.webp') },
  { id: '06b3c28b-7a26-4a16-a10a-6aeeeb0b6344', brand: 'Brunello Cucinelli', category: 'Pants', priceKzt: 71100, priceUsd: 148, imagePath: 'e56b932b-d078-40a7-8f13-8658f49def68.webp', imageUrl: img('06b3c28b-7a26-4a16-a10a-6aeeeb0b6344', 'e56b932b-d078-40a7-8f13-8658f49def68.webp') },
  { id: '0723c061-1fd5-4e1c-872a-48e30b7ec59d', brand: 'Fendi', category: 'Dresses', priceKzt: 86800, priceUsd: 181, imagePath: '8e258900-3027-4d55-a6f2-d4486217e984.webp', imageUrl: img('0723c061-1fd5-4e1c-872a-48e30b7ec59d', '8e258900-3027-4d55-a6f2-d4486217e984.webp') },
  { id: '0756ebbe-862e-410b-8a5a-94a175dc0a6a', brand: 'Stella McCartney', category: 'Boots', priceKzt: 71100, priceUsd: 148, imagePath: 'c4443a59-2f55-40e5-9e30-7d047ac4a7a4.webp', imageUrl: img('0756ebbe-862e-410b-8a5a-94a175dc0a6a', 'c4443a59-2f55-40e5-9e30-7d047ac4a7a4.webp') },
]

export const rotateBrands = ['Dolce Gabbana', 'Gucci', 'Burberry', 'Max Mara', 'Stella McCartney', 'Valentino', 'Fendi', 'Moschino', 'Kenzo', 'Emporio Armani']
export const editBrands = ['Dior', 'Louis Vuitton', 'Brunello Cucinelli', 'Prada', 'Christian Louboutin', 'Alexander McQueen', 'Versace', 'Moncler', 'Jimmy Choo', 'Fendi']
