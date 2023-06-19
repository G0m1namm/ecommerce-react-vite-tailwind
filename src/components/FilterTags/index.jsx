import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { isNull } from 'lodash'
import clx from 'classnames'

const FilterTags = ({ tags }) => {
    if (!tags) return
    const { search } = useLocation()
    const params = new URLSearchParams(search)
    const categoryIdParam = params.get('categoryId')

    return (
        <div className='mb-6 p-2 space-x-2 max-w-xl flex items-center overflow-y-hidden'>
            <NavLink
                key={`category-all`}
                className={clx("inline-flex flex-auto items-center rounded-full border border-black hover:bg-slate-200 py-1 px-2", {
                    'bg-black text-white': isNull(categoryIdParam)
                })}
                to="/"
            >
                <span>All</span>
            </NavLink>
            {tags.map(tag => {
                const isActive = categoryIdParam == tag.id || false;

                return (
                    <NavLink
                        key={`tag-${tag.id}`}
                        className={clx("inline-flex flex-auto items-center whitespace-nowrap rounded-full border border-black hover:bg-slate-200 py-1 px-2", {
                            'bg-black text-white': isActive
                        })}
                        to={{ pathname: '/', search: `?categoryId=${tag.id}` }}
                    >
                        <span>{tag.name}</span>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default FilterTags