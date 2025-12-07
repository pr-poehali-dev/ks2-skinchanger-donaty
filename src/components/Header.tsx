import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;
