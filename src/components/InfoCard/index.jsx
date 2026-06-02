import React from 'react';
import { Card, CardIcon, CardText, CardTitle, CardValue } from './style';

export default function InfoCard({
  icon: Icon,
  title,
  value,
  titleColor,
  valueColor,
  iconColor,
  iconBg,
  iconBorderColor,
  cardBg,
}) {
  return (
    <Card $cardBg={cardBg}>
      <CardIcon
        aria-hidden="true"
        $iconColor={iconColor}
        $iconBg={iconBg}
        $iconBorderColor={iconBorderColor}
      >
        {Icon ? <Icon size={18} /> : null}
      </CardIcon>
      <CardText>
        <CardTitle $titleColor={titleColor}>{title}</CardTitle>
        <CardValue $valueColor={valueColor}>{value}</CardValue>
      </CardText>
    </Card>
  );
}
