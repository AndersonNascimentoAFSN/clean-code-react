// Componente criado por Customização


import { ReactNode } from "react";

interface InputProps {
  label?: string;
  leftIcon?: ReactNode
  icon?: ReactNode
  errorMessage?: string
}

export function Input({ errorMessage, icon, label, leftIcon }: InputProps) {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      {leftIcon}
      <input type="text" />
      {icon}

      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  )
}