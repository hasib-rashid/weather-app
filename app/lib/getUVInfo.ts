export function getUVInfo(uv: any) {
    switch (uv) {
        case uv >= 0 && uv < 3:
            return 'No protection needed.'
        case uv >= 3 && uv < 6:
            return 'Seek shade during the peak hours (10am-4pm).'
        case uv >= 6 && uv < 8:
            return 'Protect sensitive skin. Use sunscreen with at least SPF 30.'
        case uv >= 8 && uv < 11:
            return 'Seek shade and stay in the water. Minimize time in the sun.'
    }
}

export function getUVTitle(uv: any) {
    switch (uv) {
        case uv >= 0 && uv < 3:
            return 'Low'
        case uv >= 3 && uv < 6:
            return 'Moderate'
        case uv >= 6 && uv < 8:
            return 'High'
        case uv >= 8 && uv < 11:
            return 'Very high'
    }
}