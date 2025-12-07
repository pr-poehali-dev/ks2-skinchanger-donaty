import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');

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
    { id: 1, name: 'AK-47 | Redline', rarity: 'Rare', category: 'Rifle', price: '2,500₽' },
    { id: 2, name: 'AWP | Dragon Lore', rarity: 'Legendary', category: 'Sniper', price: '85,000₽' },
    { id: 3, name: 'M4A4 | Howl', rarity: 'Epic', category: 'Rifle', price: '45,000₽' },
    { id: 4, name: 'Karambit | Fade', rarity: 'Legendary', category: 'Knife', price: '125,000₽' },
    { id: 5, name: 'Glock-18 | Fade', rarity: 'Epic', category: 'Pistol', price: '8,500₽' },
    { id: 6, name: 'Desert Eagle | Blaze', rarity: 'Rare', category: 'Pistol', price: '3,200₽' },
    { id: 7, name: 'AK-47 | Fire Serpent', rarity: 'Epic', category: 'Rifle', price: '35,000₽' },
    { id: 8, name: 'M4A1-S | Hyper Beast', rarity: 'Rare', category: 'Rifle', price: '4,500₽' },
    { id: 9, name: 'AWP | Asiimov', rarity: 'Rare', category: 'Sniper', price: '5,800₽' },
    { id: 10, name: 'USP-S | Kill Confirmed', rarity: 'Epic', category: 'Pistol', price: '12,500₽' },
    { id: 11, name: 'Butterfly Knife | Tiger Tooth', rarity: 'Legendary', category: 'Knife', price: '95,000₽' },
    { id: 12, name: 'AK-47 | Neon Revolution', rarity: 'Rare', category: 'Rifle', price: '6,200₽' },
    { id: 13, name: 'M4A4 | Neo-Noir', rarity: 'Rare', category: 'Rifle', price: '5,500₽' },
    { id: 14, name: 'AWP | Hyper Beast', rarity: 'Rare', category: 'Sniper', price: '4,800₽' },
    { id: 15, name: 'Desert Eagle | Golden Koi', rarity: 'Epic', category: 'Pistol', price: '9,200₽' },
    { id: 16, name: 'Karambit | Doppler', rarity: 'Legendary', category: 'Knife', price: '110,000₽' },
    { id: 17, name: 'Glock-18 | Water Elemental', rarity: 'Rare', category: 'Pistol', price: '2,800₽' },
    { id: 18, name: 'M4A1-S | Golden Coil', rarity: 'Epic', category: 'Rifle', price: '15,000₽' },
    { id: 19, name: 'P250 | Asiimov', rarity: 'Rare', category: 'Pistol', price: '3,500₽' },
    { id: 20, name: 'Bayonet | Marble Fade', rarity: 'Legendary', category: 'Knife', price: '98,000₽' },
    { id: 21, name: 'AK-47 | Vulcan', rarity: 'Rare', category: 'Rifle', price: '7,200₽' },
    { id: 22, name: 'AWP | Lightning Strike', rarity: 'Epic', category: 'Sniper', price: '18,500₽' },
    { id: 23, name: 'Five-SeveN | Monkey Business', rarity: 'Rare', category: 'Pistol', price: '3,100₽' },
    { id: 24, name: 'M4A4 | Desolate Space', rarity: 'Epic', category: 'Rifle', price: '11,800₽' }
  ];

  const navItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'skins', label: 'Скины', icon: 'Palette' },
    { id: 'donate', label: 'Донаты', icon: 'DollarSign' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
    { id: 'support', label: 'Поддержка', icon: 'Headphones' }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'bg-accent text-accent-foreground';
      case 'Epic': return 'bg-primary text-primary-foreground';
      case 'Rare': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-5xl font-heading font-bold text-glow text-primary mb-2">
              CS2 MANAGER
            </h1>
            <p className="text-muted-foreground">Панель управления скинами и донатами</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Icon name="Bell" size={20} />
              <Badge variant="destructive" className="ml-1">3</Badge>
            </Button>
            <Button variant="outline" className="gap-2">
              <Icon name="Wallet" size={20} />
              1,250 ₽
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <Card className="bg-card border-border animate-slide-in">
              <CardContent className="p-2">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? 'default' : 'ghost'}
                      className={`justify-start gap-3 ${
                        activeTab === item.id ? 'glow-orange' : ''
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <Icon name={item.icon} size={20} />
                      <span className="hidden lg:inline">{item.label}</span>
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-12 lg:col-span-10">
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
                          <span className="text-2xl font-bold">24</span>
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
                        <div className="h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                          <Icon name="Image" size={64} className="text-muted-foreground" />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">{skin.name}</CardTitle>
                          <div className="flex gap-2">
                            <Badge className={getRarityColor(skin.rarity)}>{skin.rarity}</Badge>
                            <Badge variant="outline">{skin.category}</Badge>
                          </div>
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
                      {skins.map((skin) => (
                        <Card key={skin.id} className="overflow-hidden hover:scale-105 transition-all cursor-pointer hover:glow-blue">
                          <div className="h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                            <Icon name="Image" size={64} className="text-muted-foreground" />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-lg">{skin.name}</CardTitle>
                            <div className="flex gap-2 mb-2">
                              <Badge className={getRarityColor(skin.rarity)}>{skin.rarity}</Badge>
                              <Badge variant="outline">{skin.category}</Badge>
                            </div>
                            <p className="text-xl font-bold text-primary">{skin.price}</p>
                          </CardHeader>
                          <CardContent>
                            <div className="flex gap-2">
                              <Button className="flex-1" variant="outline">
                                <Icon name="Eye" size={16} />
                              </Button>
                              <Button className="flex-1" variant="default">
                                <Icon name="ShoppingCart" size={16} />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="rifle" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skins.filter(s => s.category === 'Rifle').map((skin) => (
                        <Card key={skin.id} className="overflow-hidden hover:scale-105 transition-all cursor-pointer hover:glow-blue">
                          <div className="h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                            <Icon name="Image" size={64} className="text-muted-foreground" />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-lg">{skin.name}</CardTitle>
                            <div className="flex gap-2 mb-2">
                              <Badge className={getRarityColor(skin.rarity)}>{skin.rarity}</Badge>
                              <Badge variant="outline">{skin.category}</Badge>
                            </div>
                            <p className="text-xl font-bold text-primary">{skin.price}</p>
                          </CardHeader>
                          <CardContent>
                            <div className="flex gap-2">
                              <Button className="flex-1" variant="outline">
                                <Icon name="Eye" size={16} />
                              </Button>
                              <Button className="flex-1" variant="default">
                                <Icon name="ShoppingCart" size={16} />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="pistol" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skins.filter(s => s.category === 'Pistol').map((skin) => (
                        <Card key={skin.id} className="overflow-hidden hover:scale-105 transition-all cursor-pointer hover:glow-blue">
                          <div className="h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                            <Icon name="Image" size={64} className="text-muted-foreground" />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-lg">{skin.name}</CardTitle>
                            <div className="flex gap-2 mb-2">
                              <Badge className={getRarityColor(skin.rarity)}>{skin.rarity}</Badge>
                              <Badge variant="outline">{skin.category}</Badge>
                            </div>
                            <p className="text-xl font-bold text-primary">{skin.price}</p>
                          </CardHeader>
                          <CardContent>
                            <div className="flex gap-2">
                              <Button className="flex-1" variant="outline">
                                <Icon name="Eye" size={16} />
                              </Button>
                              <Button className="flex-1" variant="default">
                                <Icon name="ShoppingCart" size={16} />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="knife" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skins.filter(s => s.category === 'Knife').map((skin) => (
                        <Card key={skin.id} className="overflow-hidden hover:scale-105 transition-all cursor-pointer hover:glow-blue">
                          <div className="h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                            <Icon name="Image" size={64} className="text-muted-foreground" />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-lg">{skin.name}</CardTitle>
                            <div className="flex gap-2 mb-2">
                              <Badge className={getRarityColor(skin.rarity)}>{skin.rarity}</Badge>
                              <Badge variant="outline">{skin.category}</Badge>
                            </div>
                            <p className="text-xl font-bold text-primary">{skin.price}</p>
                          </CardHeader>
                          <CardContent>
                            <div className="flex gap-2">
                              <Button className="flex-1" variant="outline">
                                <Icon name="Eye" size={16} />
                              </Button>
                              <Button className="flex-1" variant="default">
                                <Icon name="ShoppingCart" size={16} />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="sniper" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skins.filter(s => s.category === 'Sniper').map((skin) => (
                        <Card key={skin.id} className="overflow-hidden hover:scale-105 transition-all cursor-pointer hover:glow-blue">
                          <div className="h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                            <Icon name="Image" size={64} className="text-muted-foreground" />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-lg">{skin.name}</CardTitle>
                            <div className="flex gap-2 mb-2">
                              <Badge className={getRarityColor(skin.rarity)}>{skin.rarity}</Badge>
                              <Badge variant="outline">{skin.category}</Badge>
                            </div>
                            <p className="text-xl font-bold text-primary">{skin.price}</p>
                          </CardHeader>
                          <CardContent>
                            <div className="flex gap-2">
                              <Button className="flex-1" variant="outline">
                                <Icon name="Eye" size={16} />
                              </Button>
                              <Button className="flex-1" variant="default">
                                <Icon name="ShoppingCart" size={16} />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
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
                        <p className="text-2xl font-bold text-primary">24</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;