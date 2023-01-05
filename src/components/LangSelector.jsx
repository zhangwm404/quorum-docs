import React, { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const langs = [
  { value: 'cn', name: '中文' },
  { value: 'en', name: 'English' },
]

export function LangSelector(props) {
  let [selectedLang, setSelectedLang] = useState();

  const router = useRouter()

  React.useEffect(() => {
    if (router.pathname.includes('/docs/en')) {
      setSelectedLang('en');
    } else {
      setSelectedLang('cn');
    }
  }, []);

  return (
    <Listbox
      as="div"
      value={selectedLang}
      onChange={(value) => {
        if (typeof window !== "undefined") {
          let pathname = router.pathname;
          if (value === 'cn') {
            pathname = pathname === '/docs/en' ? '/' : pathname.replace('/docs/en/', '/docs/');
            window.location.href = pathname;
          } else {
            pathname = pathname === '/' ? '/docs/en' : pathname.replace('/docs/', '/docs/en/');
            window.location.href = pathname;
          }
        }
      }}
      {...props}
    >
      <Listbox.Label className="sr-only">Lang</Listbox.Label>
      <Listbox.Button className="flex h-6 px-2 text-sm items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-inset dark:ring-white/5 text-gray-500 dark:text-gray-400">
        {langs.find(lang => lang.value === selectedLang)?.name}
      </Listbox.Button>
      <Listbox.Options className="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-900 dark:ring-white/5">
        {langs.map((lang) => (
          <Listbox.Option
            key={lang.value}
            value={lang.value}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                {
                  'text-orange-500': selected,
                  'text-[#0D1117] dark:text-white': active && !selected,
                  'text-slate-700 dark:text-slate-400': !active && !selected,
                  'bg-slate-100 dark:bg-[#0D1117]/40': active,
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
