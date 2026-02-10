export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'blocked'
export type TaskPriority = 'high' | 'medium' | 'low'

export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  assignee?: string
}

export interface TaskCategory {
  id: string
  name: string
  color: string
  icon: string // lucide icon name hint
  tasks: Task[]
}

export const taskCategories: TaskCategory[] = [
  {
    id: 'brand',
    name: 'Brand & Domains',
    color: '#6366f1',
    icon: 'globe',
    tasks: [
      { id: 'b1', title: 'Финализировать названия брендов (rotate / ÉDIT или другие)', status: 'todo', priority: 'high', description: 'Определиться окончательно с названиями. Проверить доступность доменов и IG handles.' },
      { id: 'b2', title: 'Купить домены (.com)', status: 'todo', priority: 'high', description: 'Как минимум основной домен + вариации. Проверить на Namecheap/GoDaddy.' },
      { id: 'b3', title: 'Зарегистрировать Instagram handles', status: 'todo', priority: 'medium', description: 'Зарегать аккаунты сразу после финализации названий, чтобы не заняли.' },
      { id: 'b4', title: 'Логотип и базовый брендинг', status: 'todo', priority: 'medium', description: 'Минимальный набор: лого, цвета, шрифты. Достаточно для сайта и упаковки.' },
      { id: 'b5', title: 'Branded packaging design', status: 'todo', priority: 'low', description: 'Дизайн garment bags, tissue paper, thank-you cards. Заказ ~200 шт.' },
    ],
  },
  {
    id: 'us-infra',
    name: 'US Infrastructure',
    color: '#10b981',
    icon: 'building',
    tasks: [
      { id: 'u1', title: 'Найти контактное лицо / партнёра в США', status: 'todo', priority: 'high', description: 'Человек или micro-fulfillment для приёма, хранения и отправки вещей. Ключевая зависимость.' },
      { id: 'u2', title: 'Организовать storage point', status: 'todo', priority: 'high', description: 'Место для хранения pre-positioned inventory. Гараж, storage unit или partner warehouse.' },
      { id: 'u3', title: 'Найти cleaning partner', status: 'todo', priority: 'medium', description: 'Химчистка рядом с storage point. $12-18/item. Договориться на регулярный объём.' },
      { id: 'u4', title: 'DHL аккаунт с корпоративной скидкой', status: 'todo', priority: 'medium', description: 'Оформить аккаунт, подтвердить -30% скидку. Настроить шаблоны отправок KZ→US.' },
      { id: 'u5', title: 'Отправить первую партию (20-30 items) в US', status: 'todo', priority: 'medium', description: 'Bulk shipment самых ходовых позиций. 4 items/package = $7.50/item DHL.' },
      { id: 'u6', title: 'US return address и процесс возвратов', status: 'todo', priority: 'low', description: 'Обратный адрес для domestic returns. Процесс: получение → осмотр → чистка → обратно на полку.' },
    ],
  },
  {
    id: 'legal-stripe',
    name: 'MT2 Company & Stripe',
    color: '#f59e0b',
    icon: 'credit-card',
    tasks: [
      { id: 's1', title: 'Подготовить MT2 компанию для Stripe', status: 'todo', priority: 'high', description: 'MT2 — юрлицо для приёма платежей. Проверить requirements: EIN, bank account, address.' },
      { id: 's2', title: 'Открыть US bank account для MT2', status: 'todo', priority: 'high', description: 'Mercury, Relay или другой онлайн-банк. Нужен для Stripe payouts.' },
      { id: 's3', title: 'Подключить Stripe к MT2', status: 'todo', priority: 'high', description: 'Stripe account → verify business → connect bank. Настроить payment links для 3 моделей.' },
      { id: 's4', title: 'Terms of Service', status: 'todo', priority: 'high', description: 'Юридический документ: rental terms, liability, damage policy, cancellation. Можно сгенерить + lawyer review.' },
      { id: 's5', title: 'Privacy Policy', status: 'todo', priority: 'medium', description: 'CCPA/GDPR compliant. Стандартный шаблон + кастомизация под rental.' },
      { id: 's6', title: 'Rental Agreement template', status: 'todo', priority: 'medium', description: 'Договор аренды, который клиент подписывает при заказе. Security deposit terms.' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing & Content',
    color: '#ec4899',
    icon: 'megaphone',
    tasks: [
      { id: 'm1', title: 'Подключить Маржан к проекту', status: 'todo', priority: 'high', assignee: 'Samat', description: 'Ввести в курс дела, показать дашборд, обсудить роль. Маржан ведёт маркетинг и контент.' },
      { id: 'm2', title: 'Контент-стратегия (IG + TikTok)', status: 'todo', priority: 'high', assignee: 'Marzhan', description: 'План постинга: что, когда, какой формат. Reels, stories, carousels. 3 поста/день после запуска.' },
      { id: 'm3', title: 'Фотосессия первых 50 items', status: 'todo', priority: 'medium', assignee: 'Marzhan', description: 'Product photography на белом фоне + lifestyle. Для каталога на сайте и соцсетей.' },
      { id: 'm4', title: 'Найти 10 micro-influencers', status: 'todo', priority: 'medium', assignee: 'Marzhan', description: 'Fashion/lifestyle, 5K-50K followers, US-based. Product gifting + $50-150 fee.' },
      { id: 'm5', title: 'Email marketing setup', status: 'todo', priority: 'low', description: 'Mailchimp/Klaviyo. Welcome sequence, post-rental follow-up, referral program emails.' },
      { id: 'm6', title: 'Referral program mechanics', status: 'todo', priority: 'low', description: 'Реферальная программа: что получает inviter и invitee. Промокод или ссылка.' },
    ],
  },
  {
    id: 'product',
    name: 'Product & Code',
    color: '#3b82f6',
    icon: 'code',
    tasks: [
      { id: 'p1', title: 'Выбрать платформу: Shopify vs custom Next.js', status: 'todo', priority: 'high', assignee: 'Samat', description: 'Shopify: быстрее, но ограниченнее. Custom: полный контроль, но дольше. Решить на основе scope.' },
      { id: 'p2', title: 'Задеплоить сайт с каталогом', status: 'todo', priority: 'high', assignee: 'Samat', description: 'Рабочий каталог с фото, описаниями, ценами. Фильтры по category/size/brand.' },
      { id: 'p3', title: 'Checkout flows для RO1/ED1/ED2', status: 'todo', priority: 'high', assignee: 'Samat', description: 'Три разных flow: подписка (RO1), membership (ED1), single rental (ED2). Stripe integration.' },
      { id: 'p4', title: 'Inventory tracking system', status: 'todo', priority: 'high', assignee: 'Samat', description: 'Статусы: available → rented → cleaning → available. В коде, без Google Sheets.' },
      { id: 'p5', title: 'Order management', status: 'todo', priority: 'medium', assignee: 'Samat', description: 'Панель управления заказами: новые, в доставке, возвраты. Email нотификации клиентам.' },
      { id: 'p6', title: 'Security deposit flow', status: 'todo', priority: 'medium', assignee: 'Samat', description: 'Stripe hold → release after return inspection. Partial charge if damage.' },
    ],
  },
]
