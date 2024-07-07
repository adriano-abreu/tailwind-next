'use client'
import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type SelectItemProps = Select.SelectItemProps & {
  text: string
  icon?: React.ReactNode
}

export function SelectItem({ text, icon, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <Select.ItemText asChild>
        <div className="flex items-center gap-2 text-black dark:text-zinc-100">
          {icon}
          {text}
        </div>
      </Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
