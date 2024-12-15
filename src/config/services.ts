import { ServiceConfig } from '../types/services';
import { Code, Database, Brain, Smartphone, Search, Palette, Bot, FileText } from 'lucide-react';

export const SERVICES_CONFIG: ServiceConfig = {
  webDev: {
    icon: Code,
    imageUrl: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  seo: {
    icon: Search,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  graphicDesign: {
    icon: Palette,
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  dataMgmt: {
    icon: Database,
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  techConsult: {
    icon: Brain,
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  mobileApp: {
    icon: Smartphone,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  ai: {
    icon: Bot,
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  contentMgmt: {
    icon: FileText,
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }
} as const;