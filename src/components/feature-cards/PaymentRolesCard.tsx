import { ArrowUpRight, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="ShieldAlert" fallback="Shield" className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Система персонажей</h3>
      <p className="mb-4 text-sm text-gray-400">Прокачивай навыки, выбирай класс и определяй судьбу своего выжившего в тёмном мире</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-red-900 text-white">ВЯ</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">Вячеслав Ярцев</p>
              <p className="text-xs text-gray-500">Уровень 47 · Наёмник</p>
            </div>
          </div>
          <button className="text-sm text-red-400 hover:text-red-300">Изменить</button>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Класс персонажа
          </label>
          <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-sm text-white">Боец ближнего боя</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="mt-1 text-xs text-gray-500">+25% урон, стойкость к морозу.</p>
        </div>

        <div className="border-t border-dashed border-[#333] pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f0f0f] border border-[#262626]">
                <Icon name="Sword" fallback="Zap" className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Фракция «Чёрный Легион»</p>
                <p className="text-xs text-gray-500">Репутация: 8 400 · Ранг: Капитан</p>
              </div>
            </div>
            <button className="text-sm text-red-400 hover:text-red-300">Изменить</button>
          </div>
        </div>

        <Button className="w-full bg-[#252525] text-gray-400 hover:bg-[#2a2a2a] hover:text-white">В игру</Button>
      </div>
    </div>
  )
}
