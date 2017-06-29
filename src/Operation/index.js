import React from 'react';

const value = (type) => ({ value }) => <span>{value}</span>;

export const Plan = value('plan');
export const Fact = value('fact');
