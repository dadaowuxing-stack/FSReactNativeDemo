import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#c8c8c8'
    },
    navTitleView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navTitleText: {
        color: '#222222',
        fontWeight: '600',
        fontFamily: 'System',
    },
    navSubTitleText: {
        fontSize: 10,
        color: '#666666'
    },
    leftNavBarBtn: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    rightNavBarBtn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
    },
    backText: {
        fontSize: 14,
        color: '#666666'
    },
    backIcon: {
        width: 19,
        height: 19
    },
    btnImage: {
        width: 15,
        height: 14
    },
    rightText: {
        marginTop: 1.5,
        fontSize: 10,
        color: '#F42C2C'
    },
    storeInfoView: {
        backgroundColor: '#c5c5c5',
        height: 30,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    storeInfoText: {
        fontSize: 14,
        marginLeft: 10
    },
    storeCardView: {
        backgroundColor: '#cccccc',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        height: 175
    },
    storeCardTopView: {
        backgroundColor: '#666666',
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 45
    },
    storeCardTopIcon: {
        marginLeft: 10,
        marginTop: 10,
        height: 15,
        width: 15
    },
    storeCompanyView: {
        width: 230
    },
    storeCompanyText: {
        marginTop: 10,
        fontSize: 14,
        marginLeft: 10,
    },
    storeCardTopBottmIcon: {
        marginTop: 1,
        marginLeft: 10,
        height: 13.5,
        width: 52.5
    },
    restView: {
        marginTop: 10,
        width: 130
    },
    restOneText: {
        textAlign: 'right'
    },
    restTwoText: {
        textAlign: 'right',
        marginTop: 2,
        fontSize: 11
    },
    storeCardMidView: {
        backgroundColor: '#ffffff',
        height: 80
    },
    storeCardMidText: {
        fontSize: 14,
        marginTop: 6,
        marginLeft: 5
    },
    storeCardMidLine: {
        backgroundColor: '#cccccc',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 0.5
    },
    storeCardButtomView: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 50
    },
    storeBtnView: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 20,
        marginEnd: 15,
        width: 130,
        height: 40
    },
    storeBtnText: {
        marginLeft: 3
    },
});