import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../button'

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/diego3g.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-bold text-zinc-700 dark:text-zinc-100">
          Adriano de Abreu
        </span>

        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          adriano@rocketseat.com.br
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
