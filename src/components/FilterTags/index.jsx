import React from 'react'
import { isEmpty, isNull } from 'lodash'
import clx from 'classnames'
import { Link, useSearch } from '@tanstack/react-location'

const FilterTags = ({ tags }) => {
    if (!tags || isEmpty(tags)) return
    const queryParam = useSearch()
    const categoryIdParam = queryParam?.categoryId || null

    return (
        <div className='mb-6 p-2 space-x-2 max-w-xl flex items-center overflow-y-hidden'>
            <Link
                key={`category-all`}
                className={clx("inline-flex flex-auto items-center rounded-full border border-black hover:bg-slate-200 py-1 px-2", {
                    'bg-black text-white': isNull(categoryIdParam)
                })}
                to="/"
                activeOptions={{ exact: true }}
            >
                <span>All</span>
            </Link>
            {tags.map(tag => {
                return (
                    <Link
                        key={`tag-${tag.id}`}
                        to="/"
                        className={clx("inline-flex flex-auto items-center whitespace-nowrap rounded-full border border-black hover:bg-slate-200 py-1 px-2", {
                            'bg-black text-white': categoryIdParam == tag.id
                        })}
                        search={{
                            categoryId: tag.id
                        }}
                    >
                        <span>{tag.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}

export default FilterTags