import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'

const langs = [
  { value: 'cn', name: '中文' },
  { value: 'en', name: 'English' },
]

export function LangSelector(props) {
  let [selectedLang, setSelectedLang] = useState('cn')

  useEffect(() => {
    if (selectedLang) {
      localStorage.setItem('lang', selectedLang);
    }
  }, [selectedLang])

  return (
    <Listbox
      as="div"
      value={selectedLang}
      onChange={setSelectedLang}
      {...props}
    >
      <Listbox.Label className="sr-only">Lang</Listbox.Label>
      <Listbox.Button className="flex h-6 px-2 text-sm items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5 text-gray-400">
        {langs.find(lang => lang.value === selectedLang)?.name}
      </Listbox.Button>
      <Listbox.Options className="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5">
        {langs.map((lang) => (
          <Listbox.Option
            key={lang.value}
            value={lang.value}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                {
                  'text-sky-500': selected,
                  'text-slate-900 dark:text-white': active && !selected,
                  'text-slate-700 dark:text-slate-400': !active && !selected,
                  'bg-slate-100 dark:bg-slate-900/40': active,
                }
              )
            }
          >
            <div className="ml-3">{lang.name}</div>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
