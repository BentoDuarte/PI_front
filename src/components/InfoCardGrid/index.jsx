import React from 'react';
import InfoCard from '../InfoCard';
import { Grid } from './style';

export default function InfoCardGrid({ items, minWidth = 180, gap = 16 }) {
  return (
    <Grid $minWidth={minWidth} $gap={gap}>
      {items.map(item => (
        <InfoCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          value={item.value}
          titleColor={item.titleColor}
          valueColor={item.valueColor}
          iconColor={item.iconColor}
          iconBg={item.iconBg}
          iconBorderColor={item.iconBorderColor}
          cardBg={item.cardBg}
        />
      ))}
    </Grid>
  );
}
