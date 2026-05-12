import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '爪爪泡泡屋 | 宠物洗护美容',
  description: '猫狗洗澡、基础美容、皮毛护理和到店接送服务。'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
