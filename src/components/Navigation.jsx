import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

export function Navigation({ navigation, className }) {
  const _expandMap = {};
  const belongMap = {};
  for (const item of navigation) {
    _expandMap[item.title] = !!item.expand;
    for (const link of item.links) {
      belongMap[link.href] = item.title;
    }
  }
  let router = useRouter();
  const [expandMap, setExpandMap] = React.useState(_expandMap);

  React.useEffect(() => {
    const belongTo = belongMap[router.pathname];
    if (belongTo && !expandMap[belongTo]) {
      setExpandMap({
        ...expandMap,
        [belongTo]: true
      });
    }
  }, [router.pathname]);

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul className="space-y-6">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-[#0D1117] dark:text-white flex items-center cursor-pointer select-none" onClick={() => {
              setExpandMap({
                ...expandMap,
                [section.title]: !expandMap[section.title]
              });
            }}>
              {section.title}
              <div className="ml-1 opacity-80 text-[14px]">
                {expandMap[section.title] ? <FiChevronDown /> : <FiChevronRight />}
              </div>
            </h2>
            {expandMap[section.title] && (
              <ul className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-3 lg:space-y-3 lg:border-slate-200">
                {section.links.map((link) => (
                  <li key={link.href} className="relative">
                    <Link href={link.href}>
                      <a
                        className={clsx(
                          'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                          {
                            'font-semibold text-orange-500 before:bg-orange-500':
                              link.href === router.pathname,
                            'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300':
                              link.href !== router.pathname,
                          }
                        )}
                      >
                        {link.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
