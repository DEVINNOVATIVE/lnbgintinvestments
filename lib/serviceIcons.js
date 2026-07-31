import {
  Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers,
  Home as HomeIcon,
} from 'lucide-react';

// Keys must match the `iconName` values in lib/serviceData.js
const iconMap = { Target, BarChart3, Building2, LineChart, Globe2, TrendingUp, Layers, HomeIcon };

export function getServiceIcon(iconName) {
  return iconMap[iconName] || Target;
}
