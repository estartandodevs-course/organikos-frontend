import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { CategoriesWrapper, MarketInfos, MarketWrapper, SellerAvatar, WrapperSkeleton } from './styles';

export const CardSellerSkeleton = ({ number = 12 }) => {
  return Array(number)
    .fill(0)
    .map((_, i) => (
      <WrapperSkeleton key={i}>
        <SellerAvatar>
          <Skeleton circle width={53.31} height={53.31} />
          <Skeleton width={40} />
        </SellerAvatar>
        <MarketWrapper>
          <MarketInfos>
            <div>
              <Skeleton width={100} />
              <Skeleton count={2} width={150} height={20} />
            </div>
            <Skeleton width={25} height={25} />
          </MarketInfos>
          <CategoriesWrapper>
            <Skeleton width={210} height={20} count={2} />
          </CategoriesWrapper>
        </MarketWrapper>
      </WrapperSkeleton>
    ));
};