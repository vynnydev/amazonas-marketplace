import React, { forwardRef } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, onClick, disabled, outline, small, icon: Icon }, ref) => {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? 'bg-white' : 'bg-green-950'}
        ${outline ? 'border-black' : 'border-green-950'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
      >
        {Icon && (
          <Icon
            size={24}
            className="
            absolute
            left-4
            top-3
          "
          />
        )}
        {label}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
