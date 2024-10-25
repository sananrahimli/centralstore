import { useRouter } from 'next/router'

export default function BreadcrumbsRouter() {
    const router = useRouter();
    const pathArray = router.asPath.split('/').filter(Boolean);

    const breadcrumbs = [
        { name: 'Главная', href: '/' },
        ...pathArray.map((path, index) => ({
            name: decodeURIComponent(path),
            href: `/${pathArray.slice(0, index + 1).join('/')}`,
        })),
    ];

    return (
        <nav>
            {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                    <a href={crumb.href}>{crumb.name}</a>
                    {index < breadcrumbs.length - 1 && ' > '}
                </span>
            ))}
        </nav>
    )
}
