import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 70,
        justifyContent: 'space-between',
    },

    containerLogo: {
        alignItems: 'center',
    },

    logo: {
        width: 130,
        height: 30,
    },

    containerInput: {
        marginBottom: 15,
    },

    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6,
    },

    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    footerText: {
        color: COLORS.gray3,
    },
    footerLink: {
        color: COLORS.blue,
    },
}