export const theme = {
    colors: {
        primary: '#F1D302',
        secondary: '#483C46',
        third: '#FF521B',
        neutral: (opacity) => `rgba(10, 10, 10, ${ opacity })`,
    },
    fontWeights: {
        medium: '500',
        semibold: '600',
        bold: '700',
    },
    radius: {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 18,
    }
}