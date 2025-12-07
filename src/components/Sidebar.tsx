import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const navItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'servers', label: 'Серверы', icon: 'Server' },
    { id: 'skins', label: 'Скины', icon: 'Palette' },
    { id: 'donate', label: 'Донаты', icon: 'DollarSign' },
    { id: 'weapons', label: 'Донат оружие', icon: 'Sword' },
    { id: 'profile', label: 'Профиль', icon: 'User' },
    { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
    { id: 'support', label: 'Поддержка', icon: 'Headphones' }
  ];

  return (
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
              onClick={() => onTabChange(item.id)}
            >
              <Icon name={item.icon} size={20} />
              <span className="hidden lg:inline">{item.label}</span>
            </Button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
};

export default Sidebar;