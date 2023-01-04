import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const themes = [
  { name: 'Light', value: 'light', icon: LightIcon },
  { name: 'Dark', value: 'dark', icon: DarkIcon },
]

function IconBase({ children, ...props }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      {children}
    </svg>
  )
}

function LightIcon(props) {
  return <MdOutlineLightMode {...props} />
}

function DarkIcon(props) {
  return <MdOutlineDarkMode {...props} />
}

export function ThemeSelector(props) {
  let [selectedTheme, setSelectedTheme] = useState()

  useEffect(() => {
    if (selectedTheme) {
      document.documentElement.setAttribute('data-theme', selectedTheme.value)
    } else {
      setSelectedTheme(
        themes.find(
          (theme) =>
            theme.value === document.documentElement.getAttribute('data-theme')
        )
      )
    }
  }, [selectedTheme])

  return (
    <Listbox
      as="div"
      value={selectedTheme}
      onChange={setSelectedTheme}
      {...props}
    >
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button className="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-inset dark:ring-white/5">
        <span className="sr-only">{selectedTheme?.name}</span>
        <LightIcon className="hidden h-4 w-4 fill-orange-500 [[data-theme=light]_&]:block" />
        <DarkIcon className="hidden h-4 w-4 fill-orange-500 [[data-theme=dark]_&]:block" />
        <LightIcon className="hidden h-4 w-4 fill-slate-400 [:not(.dark)[data-theme=system]_&]:block" />
        <DarkIcon className="hidden h-4 w-4 fill-slate-400 [.dark[data-theme=system]_&]:block" />
      </Listbox.Button>
      <Listbox.Options className="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-900 dark:ring-white/5">
        {themes.map((theme) => (
          <Listbox.Option
            key={theme.value}
            value={theme}
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
            {({ selected }) => (
              <>
                <div className="rounded-md bg-white p-1 shadow ring-1 ring-[#0D1117]/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
                  <theme.icon
                    className={clsx('h-4 w-4', {
                      'fill-orange-500 dark:fill-orange-500': selected,
                      'fill-slate-400': !selected,
                    })}
                  />
                </div>
                <div className="ml-3">{theme.name}</div>
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
