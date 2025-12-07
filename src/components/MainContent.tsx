import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface MainContentProps {
  activeTab: string;
}

const MainContent = ({ activeTab }: MainContentProps) => {
  const donatePackages = [
    {
      id: 1,
      name: 'Новичок',
      price: { rub: 100, uah: 100 },
      icon: 'Star',
      color: 'from-zinc-700 to-zinc-900',
      glowColor: 'glow-blue',
      features: ['Базовые скины', 'Доступ к чату', 'Базовая статистика']
    },
    {
      id: 2,
      name: 'Про',
      price: { rub: 500, uah: 200 },
      icon: 'Zap',
      color: 'from-purple-600 to-purple-900',
      glowColor: 'glow-blue',
      features: ['Премиум скины', 'Приоритет в чате', 'Расширенная статистика', 'Эксклюзивные анимации']
    },
    {
      id: 3,
      name: 'Админ',
      price: { rub: 1999, uah: 500 },
      icon: 'Shield',
      color: 'from-orange-500 to-orange-700',
      glowColor: 'glow-orange',
      features: ['Все скины', 'Права модератора', 'VIP статус', 'Уникальные эффекты', 'Приоритетная поддержка']
    },
    {
      id: 4,
      name: 'XL Admin',
      price: { rub: 5000, uah: 10000 },
      icon: 'Crown',
      color: 'from-yellow-400 to-yellow-600',
      glowColor: 'glow-gold',
      features: ['Легендарные скины', 'Полные права админа', 'Эксклюзивный доступ', 'Персональная поддержка', 'Уникальный значок']
    }
  ];

  const skins = [
    { id: 1, name: 'AK-47 | Redline', rarity: 'Rare', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVQ7MEpiLuSrYmnjQO3-UdsZGHxJoTGIw86MFzVqFm9xu_qhMW57ZTKmCQ3vCQh4yzUzQv330_LaS5dKA/360fx360f' },
    { id: 2, name: 'AWP | Dragon Lore', rarity: 'Legendary', category: 'Sniper', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7c2G0AuMYl37_DoIqn2FK2qRFvYzzzJIHDcFdvNFrY-wC5xurxxcjrRELzkQ/360fx360f' },
    { id: 3, name: 'M4A4 | Howl', rarity: 'Epic', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLjQhH9U5Pp9g-7J4cL3i1ew-RI6Nj-lcYCRI1U-ZF_Q_FTswO3p18Si_MOeZt-J_Q8/360fx360f' },
    { id: 4, name: 'Karambit | Fade', rarity: 'Legendary', category: 'Knife', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MZwnO_E_Jn4xlWx-kA6YDzxcY-TcQVrYQzS_le4xezxxcjr-fYx-EE/360fx360f' },
    { id: 5, name: 'Glock-18 | Fade', rarity: 'Epic', category: 'Pistol', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-KgPb4J4Tdn2xZ_Ish2rqVrI-l0VLnrhJoY2rwJtTEd1Q3Y1HR-lC8yejxxcjrRKLyp5w/360fx360f' },
    { id: 6, name: 'Desert Eagle | Blaze', rarity: 'Rare', category: 'Pistol', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH_9mkgIWKkPvLPr7Vn35cppQk2r6Y8NmtiVKw-kNrYzv3ItDEdlI6ZVvX_Vm_w-fxxcjrQ8-CNeY/360fx360f' },
    { id: 7, name: 'AK-47 | Fire Serpent', rarity: 'Epic', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08-jhYWZnvnxDLfYkWNFppMp27mV9Imn21HnqEE4ajzxLdLGdlA7Zg3V8lC_wr-xxcjr6RoTLhM/360fx360f' },
    { id: 8, name: 'M4A1-S | Hyper Beast', rarity: 'Rare', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITBhGJf7cRnk9bN_Iv9nBrh_RVtNmz2cNTAcgI-YVyFqFfvx-rr0Z7qtJTXiSw0cW5W9VA/360fx360f' },
    { id: 9, name: 'AWP | Asiimov', rarity: 'Rare', category: 'Sniper', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7c2DJS5MRjj-zF_Jn4xgCwqkY4NzyldoTGIw87Mg7VqQe4ye7xxcjrU7D7ht8/360fx360f' },
    { id: 10, name: 'USP-S | Kill Confirmed', rarity: 'Epic', category: 'Pistol', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jiPLfFl2xU18h0juDU-MKi2ALi80BlZzv7JYGUIVNvZAvY_FW3kr-6jJa9v5_My3U2uykrt2GdwUKQxfqcHg/360fx360f' },
    { id: 11, name: 'Butterfly Knife | Tiger Tooth', rarity: 'Legendary', category: 'Knife', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPP7I6rdl2JU18lwmO7Eu4qhigKy-RVtNjyiI9WWJlU2ZV3W-gC9xr2915-66M7OmCAwpGB8soB-Y1sc/360fx360f' },
    { id: 12, name: 'AK-47 | Neon Revolution', rarity: 'Rare', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEm1Rd6dd2j6eQ9N2t2wK3-ENuam3yJIKQdVQ5N1rT-AS5k-q5hce8vM_Nn3Nm7T5iuyh7R-rQxw/360fx360f' },
    { id: 13, name: 'M4A4 | Neo-Noir', rarity: 'Rare', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18hwmO7Eu4ih3wew-ERuam77JNLAcwU2Y1qD_AS8lOfpjZa0v8vLzCZlpGB8smD7G5Ut/360fx360f' },
    { id: 14, name: 'AWP | Hyper Beast', rarity: 'Rare', category: 'Sniper', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0teXI8oThxgHiqkdkMT_2IYTEcQJqYQrY_we_xO6-hcC_vJjLmnRmsiNw4yzfzBS1hgYMMLJ-G6E7ig/360fx360f' },
    { id: 15, name: 'Desert Eagle | Golden Koi', rarity: 'Epic', category: 'Pistol', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH_9mkgIWKkPvLPr7Vn35c18lwmO7Eu9yliwXkrRFtNz37dtLEdVc7ZF-EqAe6366x0uZ3kYk3/360fx360f' },
    { id: 16, name: 'Karambit | Doppler', rarity: 'Legendary', category: 'Knife', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20jfL2IbrummJW4NE_0r3Hp4ij2wexqkduZ2r1I9STdwVrZgvZ-FTql-_nhJ_p7p6byGwj5HcIo_6LQw/360fx360f' },
    { id: 17, name: 'Glock-18 | Water Elemental', rarity: 'Rare', category: 'Pistol', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-YgfjxNrfVk1Rd4cJ5nqeQp4-migHmqkJsZm77I4-WcQE7YQnYqAS8w-q-hsW-v5jIn3RqpGB8sn7Z2-WH/360fx360f' },
    { id: 18, name: 'M4A1-S | Golden Coil', rarity: 'Epic', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNF18lwmO7Eu9yliwXkrRFtNzihLdKTIwVqNQnX_Fm9k-Tr08C87pqYyXA3vSkq4HjYlBC2hRwYbbI_gO3JUvfVb_tD/360fx360f' },
    { id: 19, name: 'P250 | Asiimov', rarity: 'Rare', category: 'Pistol', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-5gZKKgPLLMrfFqWdQ-sJ0teXI8oThxlXg-kRrZW6hd9fGdFA9Z1rY-gW9yOq5hcCi_MOe5zWqq-E/360fx360f' },
    { id: 20, name: 'Bayonet | Marble Fade', rarity: 'Legendary', category: 'Knife', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4mCmf7zO6_ummJW4NE_2r2Qo9_ziwTlqBJuNmvxctDBcQM_YQrY_gC6wL-6h8fptJ7KySA1uCJ0s_6BQA/360fx360f' },
    { id: 21, name: 'AK-47 | Vulcan', rarity: 'Rare', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gY6Kh8jiIYTZk2pH8Yt13L3HoI733lDn_ERkYGnyLI-SdwE2NQnU-VftxL-6m9bi66J_b5bE/360fx360f' },
    { id: 22, name: 'AWP | Lightning Strike', rarity: 'Epic', category: 'Sniper', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0n_L2Jb7Um2Zu5Mx2gv2PotSg2gHm_0ZoY23wJYCTJgQ-YFHTqQe3wbjp15K1v56cyXczpGB8soIafLg7/360fx360f' },
    { id: 23, name: 'Five-SeveN | Monkey Business', rarity: 'Rare', category: 'Pistol', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTQgXtu5Mx2gv2Pot6l3Qbi_kY5ZG3xdtOde1Q4ZFyGrwW7l-zsh8C86czJnXozsyIn4iuLgVXp1lO9t5K3/360fx360f' },
    { id: 24, name: 'M4A4 | Desolate Space', rarity: 'Epic', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09-5gZKKmePLP7LWnn8f6ZN3j-3D-oP2iVXkqhU5a2HzJoXAewE9M13V_gC-w73qg8Ci_MOeZ8HXl6A/360fx360f' },
    { id: 25, name: 'AK-47 | Phantom Disruptor', rarity: 'Epic', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08-5gY6KhfjLP7LYhVRC6dBzj-rEpN2sjgWy-0FoYG6gJtecIAU_YFDSqFW8k-bq1JW6tcvOmCNivnNx4XfamxOwgAYMMf_1uSVSvg/360fx360f' },
    { id: 26, name: 'M4A4 | Emperor', rarity: 'Legendary', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDL3dl2JW7fp9g-7J4bP5iUazrl0_ZWH6JdKVIQZsaAyC_AS9wL_vgpG_tZ-bmHsyvnYjtH7UmUGpwUYbMKlH3YU/360fx360f' },
    { id: 27, name: 'AWP | Chromatic Aberration', rarity: 'Epic', category: 'Sniper', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0teXI8oTht1i1uRQ5fT_1IYWSIQNoYQnY-1C9xr_r1JW1vZnKznVksiZ3t37cykCxgBwYZrFugKGbVRzLUfI2Rucw/360fx360f' },
    { id: 28, name: 'Desert Eagle | Printstream', rarity: 'Epic', category: 'Pistol', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH_9mkgIWKkPvLPr7Vn35cppR03ejAoYj32FDl_kFpY2r1d4DBdVQ_MFvR-1foxu3phZG8tZ_KzSBgviYn4XnUzhCw0AYMMLKJQVIFhg/360fx360f' },
    { id: 29, name: 'M4A1-S | Printstream', rarity: 'Epic', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLbUkmJE5Ysg2uyTpd723wO3_xY9MW-hd9THcVU_aQrU_1C7wOvxxcjr89iDWLM/360fx360f' },
    { id: 30, name: 'Talon Knife | Fade', rarity: 'Legendary', category: 'Knife', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTZS6eOlnI-Zg8j6OrzZglRd4cJ5nqfE89ik2wfl_UpkZW_3JYDBcgU5Nw6E_ATvkubxxcjrpwuGXSU/360fx360f' },
    { id: 31, name: 'AWP | Neo-Noir', rarity: 'Epic', category: 'Sniper', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0teXI8oTht1i1uRQ5fWGlcdSUIFI2MlqE-1TtyOrphZC56MycziZl6HQntH3ZmRO_gU0aabbJwvTPUUDeWPQgTbrYnGeFpA/360fx360f' },
    { id: 32, name: 'Glock-18 | Gamma Doppler', rarity: 'Legendary', category: 'Pistol', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-cluX3IbjUhmVQ_sR0teTE8YXghQGxqRVlZz3zdY6XI1c-ZFrVqVjrxu291p68v53MnCZkvCYr5SqPyRO2n1gSOfOw1k8/360fx360f' },
    { id: 33, name: 'M4A4 | The Coalition', rarity: 'Rare', category: 'Rifle', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLbQhX9Q18hwmO7Eu9302A3nrxdlZW_zI4PAI1A6YgmB-gS6kLjmhJS7u8nAmCNhuHQntX_ZmBC_gAYMMLIaX9bNZA/360fx360f' },
    { id: 34, name: 'P90 | Asiimov', rarity: 'Rare', category: 'SMG', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0teXI8oThxgW2r0VsYj-gdtPGJgVsMFCB_gTslbzum9bi6_GEP3K4/360fx360f' },
    { id: 35, name: 'MAC-10 | Neon Rider', rarity: 'Rare', category: 'SMG', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhIGZmPj4Jr7ummJW4NE_0r3A896t2FLt_hVlamj3I4TCc1I4aFyDr1G7x-28h56-upSbyyQ2uCd0sP6MQA/360fx360f' },
    { id: 36, name: 'UMP-45 | Crime Scene', rarity: 'Rare', category: 'SMG', price: 'Бесплатно', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBSuImJkoyKmvj7DL7ChWNU7ctgpb_HoIin2gK1_RU5ZmGldY-cIwRsYl_Y-AW-l-q915S-tJTKyXZlvSEk7CuJgVXp1h2lQqFI/360fx360f' }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'bg-accent text-accent-foreground';
      case 'Epic': return 'bg-primary text-primary-foreground';
      case 'Rare': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const renderSkinCard = (skin: typeof skins[0]) => (
    <Card key={skin.id} className="overflow-hidden hover:scale-105 transition-all cursor-pointer hover:glow-blue">
      <div className="h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
        <img 
          src={skin.image} 
          alt={skin.name}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{skin.name}</CardTitle>
        <div className="flex gap-2 mb-2">
          <Badge className={getRarityColor(skin.rarity)}>{skin.rarity}</Badge>
          <Badge variant="outline">{skin.category}</Badge>
        </div>
        <p className="text-xl font-bold text-accent">{skin.price}</p>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Button className="flex-1" variant="outline">
            <Icon name="Eye" size={16} />
          </Button>
          <Button className="flex-1" variant="default">
            <Icon name="Download" size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      {activeTab === 'main' && (
        <div className="space-y-6 animate-fade-in">
          <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/50 glow-orange">
            <CardHeader>
              <CardTitle className="text-3xl font-heading flex items-center gap-3">
                <Icon name="Trophy" size={32} className="text-primary" />
                Добро пожаловать в CS2 Manager!
              </CardTitle>
              <CardDescription className="text-base">
                Управляй скинами, получай донаты и прокачивай свой профиль
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card/50 p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Package" size={24} className="text-secondary" />
                    <span className="text-2xl font-bold">36</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Скинов в коллекции</p>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="TrendingUp" size={24} className="text-accent" />
                    <span className="text-2xl font-bold">1,250₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Баланс аккаунта</p>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Award" size={24} className="text-primary" />
                    <span className="text-2xl font-bold">Про</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Текущий статус</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
              <Icon name="Sparkles" size={28} className="text-primary" />
              Популярные скины
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skins.slice(0, 3).map((skin) => (
                <Card key={skin.id} className="overflow-hidden hover:scale-105 transition-all cursor-pointer hover:glow-blue">
                  <div className="h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
                    <img 
                      src={skin.image} 
                      alt={skin.name}
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{skin.name}</CardTitle>
                    <div className="flex gap-2">
                      <Badge className={getRarityColor(skin.rarity)}>{skin.rarity}</Badge>
                      <Badge variant="outline">{skin.category}</Badge>
                    </div>
                    <p className="text-xl font-bold text-accent mt-2">{skin.price}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'donate' && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2">Донат пакеты</h2>
            <p className="text-muted-foreground mb-6">
              Выбери подходящий пакет и получи эксклюзивные возможности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {donatePackages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`overflow-hidden hover:scale-105 transition-all cursor-pointer ${pkg.glowColor} bg-gradient-to-br ${pkg.color}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon name={pkg.icon} size={40} className="text-white" />
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {pkg.price.rub}₽ / {pkg.price.uah}₴
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-heading text-white">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/90">
                        <Icon name="Check" size={16} className="text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg" variant="secondary">
                    Купить пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'skins' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-heading font-bold">Коллекция скинов</h2>
            <div className="flex gap-2">
              <Button variant="outline">
                <Icon name="Filter" size={20} />
              </Button>
              <Button variant="outline">
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="rifle">Винтовки</TabsTrigger>
              <TabsTrigger value="pistol">Пистолеты</TabsTrigger>
              <TabsTrigger value="knife">Ножи</TabsTrigger>
              <TabsTrigger value="sniper">Снайперки</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skins.map(renderSkinCard)}
              </div>
            </TabsContent>
            <TabsContent value="rifle" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skins.filter(s => s.category === 'Rifle').map(renderSkinCard)}
              </div>
            </TabsContent>
            <TabsContent value="pistol" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skins.filter(s => s.category === 'Pistol').map(renderSkinCard)}
              </div>
            </TabsContent>
            <TabsContent value="knife" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skins.filter(s => s.category === 'Knife').map(renderSkinCard)}
              </div>
            </TabsContent>
            <TabsContent value="sniper" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skins.filter(s => s.category === 'Sniper').map(renderSkinCard)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {activeTab === 'profile' && (
        <div className="space-y-6 animate-fade-in">
          <Card className="bg-gradient-to-br from-purple-600/20 to-orange-500/20 border-primary glow-orange">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="User" size={48} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-heading">Player_Name</CardTitle>
                  <p className="text-muted-foreground">Статус: Про</p>
                  <Badge className="mt-2 bg-primary">Level 15</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <p className="text-2xl font-bold text-primary">156</p>
                  <p className="text-sm text-muted-foreground">Игр сыграно</p>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <p className="text-2xl font-bold text-secondary">1.24</p>
                  <p className="text-sm text-muted-foreground">K/D Ratio</p>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <p className="text-2xl font-bold text-accent">45%</p>
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-lg">
                  <p className="text-2xl font-bold text-primary">36</p>
                  <p className="text-sm text-muted-foreground">Скинов</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="space-y-6 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center gap-2">
                <Icon name="BarChart3" size={28} />
                Статистика игрока
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Точность стрельбы</span>
                    <span className="font-bold">67%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[67%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Хэдшоты</span>
                    <span className="font-bold">42%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[42%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>MVP раунды</span>
                    <span className="font-bold">28%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[28%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center gap-2">
                <Icon name="Settings" size={28} />
                Настройки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-semibold">Уведомления</p>
                  <p className="text-sm text-muted-foreground">Получать уведомления о новых скинах</p>
                </div>
                <Button variant="outline">Включено</Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-semibold">Язык</p>
                  <p className="text-sm text-muted-foreground">Русский</p>
                </div>
                <Button variant="outline">Изменить</Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-semibold">Валюта</p>
                  <p className="text-sm text-muted-foreground">Рубли (₽)</p>
                </div>
                <Button variant="outline">Изменить</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'support' && (
        <div className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center gap-2">
                <Icon name="Headphones" size={28} />
                Поддержка
              </CardTitle>
              <CardDescription>Свяжитесь с нами по любым вопросам</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start gap-3" variant="outline" size="lg">
                <Icon name="MessageCircle" size={24} />
                Открыть чат поддержки
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline" size="lg">
                <Icon name="Mail" size={24} />
                Написать на email
              </Button>
              <Button className="w-full justify-start gap-3" variant="outline" size="lg">
                <Icon name="FileQuestion" size={24} />
                База знаний (FAQ)
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default MainContent;