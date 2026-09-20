import { type ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({
  variant = 'primary',
  style,
  children,
  ...rest
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
  }

  const variantStyle: React.CSSProperties =
    variant === 'primary'
      ? { background: '#2563EB', color: '#fff' }
      : { background: '#E5E7EB', color: '#111827' }

  return (
    <button style={{ ...baseStyle, ...variantStyle, ...style }} {...rest}>
      {children}
    </button>
  )
}
