'use client';

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { customerProductService } from '@/services/customer-product';
import { productCatalogService } from '@/services/product-catalog';
import styles from './ProductsGrid.module.scss';

type ColorVariant = {
  iconColor: 'iconBlue' | 'iconPurple' | 'iconGreen';
  infoIconColor: 'infoIconBlue' | 'infoIconPurple' | 'infoIconGreen';
  progressColor: 'progressBlue' | 'progressPurple' | 'progressOrange';
  barColor: 'barBlue' | 'barPurple' | 'barGray';
  btnColor: 'btnBlue' | 'btnPurple' | 'btnGreen';
};

const colorVariants: ColorVariant[] = [
  {
    iconColor: 'iconBlue',
    infoIconColor: 'infoIconBlue',
    progressColor: 'progressBlue',
    barColor: 'barBlue',
    btnColor: 'btnBlue',
  },
  {
    iconColor: 'iconPurple',
    infoIconColor: 'infoIconPurple',
    progressColor: 'progressPurple',
    barColor: 'barPurple',
    btnColor: 'btnPurple',
  },
  {
    iconColor: 'iconGreen',
    infoIconColor: 'infoIconGreen',
    progressColor: 'progressBlue',
    barColor: 'barBlue',
    btnColor: 'btnGreen',
  },
];

function formatInstallDate(dateString: string | null | undefined): string {
  if (!dateString) return 'Installed: -';

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return 'Installed: -';

  return `Installed: ${date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })}`;
}

function isExpiredStatus(status: string | null): boolean {
  const normalized = status?.toLowerCase() ?? '';
  return normalized === 'expired' || normalized === 'inactive' || normalized === 'contract_expired';
}

export default function ProductsGrid() {
  const { data: customerProducts = [], isLoading: loadingCustomerProducts, isError: customerProductsError } = useQuery({
    queryKey: ['customer-products'],
    queryFn: () => customerProductService.getCustomerProducts(),
  });

  const { data: productCatalogs = [], isLoading: loadingProductCatalogs, isError: productCatalogsError } = useQuery({
    queryKey: ['product-catalog'],
    queryFn: () => productCatalogService.getProductCatalogs(),
  });

  const products = useMemo(() => {
    const catalogMap = new Map(productCatalogs.map((catalog) => [catalog.id, catalog]));

    return customerProducts.map((product, index) => {
      const catalog = catalogMap.get(product.product_catalog_id);
      const variant = colorVariants[index % colorVariants.length];
      const isExpired = isExpiredStatus(product.status);

      return {
        id: product.id,
        name: catalog?.name ?? 'Unknown Product',
        model: `Model: ${catalog?.model ?? '-'}`,
        location: product.installation_location ?? 'Location unavailable',
        installed: formatInstallDate(product.installation_date),
        status: (product.status ?? 'active').replace('_', ' ').toUpperCase(),
        statusClass: isExpired ? styles.statusExpired : styles.statusActive,
        progressLabel: isExpired ? 'No Active Contract' : 'Product Status',
        progressValue: isExpired ? 'Expired' : 'Active',
        progressPercent: 100,
        actionLabel: isExpired ? 'Subscribe Contract' : 'View Details',
        ...variant,
        progressColor: isExpired ? 'progressOrange' : variant.progressColor,
        barColor: isExpired ? 'barGray' : variant.barColor,
      };
    });
  }, [customerProducts, productCatalogs]);

  const isLoading = loadingCustomerProducts || loadingProductCatalogs;
  const isError = customerProductsError || productCatalogsError;

  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>My Products</h2>
        <a href="/products" className={styles.viewAll}>View All Products →</a>
      </div>

      <div className={styles.grid}>
        {isLoading && <p className={styles.stateText}>Loading products...</p>}
        {isError && <p className={styles.stateText}>Failed to load products.</p>}
        {!isLoading && !isError && products.length === 0 && (
          <p className={styles.stateText}>No products found.</p>
        )}
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <div className={`${styles.productIcon} ${styles[product.iconColor]}`}>
                  <span className={`material-symbols-outlined ${styles.productIconSymbol}`}>
                    water_drop
                  </span>
                </div>
                <span className={`${styles.statusBadge} ${product.statusClass}`}>{product.status}</span>
              </div>

              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productModel}>{product.model}</p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={`material-symbols-outlined ${styles.infoIcon} ${styles[product.infoIconColor]}`}>
                    location_on
                  </span>
                  {product.location}
                </div>
                <div className={styles.infoItem}>
                  <span className={`material-symbols-outlined ${styles.infoIcon} ${styles[product.infoIconColor]}`}>
                    calendar_month
                  </span>
                  {product.installed}
                </div>
              </div>

              <div className={styles.progress}>
                <div className={styles.progressHeader}>
                  <span className={styles.progressLabel}>{product.progressLabel}</span>
                  <span className={`${styles.progressValue} ${styles[product.progressColor]}`}>
                    {product.progressValue}
                  </span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={`${styles.progressBar} ${styles[product.barColor]}`}
                    style={{ width: `${product.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <button type="button" className={`${styles.cardAction} ${styles[product.btnColor]}`}>
              {product.actionLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
