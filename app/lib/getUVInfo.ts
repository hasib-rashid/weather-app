export function getUVInfo(uv: any) {
    if (uv >= 0 && uv < 3) {
        return 'No protection needed.'
    } else if (uv >= 3 && uv < 6) {
        return 'Seek shade during the peak hours (10am-4pm).'
    } else if (uv >= 6 && uv < 8) {
        return 'Protect sensitive skin. Use sunscreen with at least SPF 30.'
    } else if (uv >= 8 && uv < 11) {
        return 'Seek shade and stay in the water. Don\'t go outside'
    }
}

export function getUVTitle(uv: any) {
    const uvTitle = [
        'Very Low', 'Low', 'Moderate', 'High',
        'Very High', 'Extreme', 'Dangerous',
        'Very Dangerous', 'Extreme Danger', 'Brutally Dangerous',
    ][uv - 1];
    return uvTitle;
}