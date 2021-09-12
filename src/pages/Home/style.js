import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";



export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',

    },

    header:{
        
        backgroundColor: colors.heading,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 80,
    },

    menu:{
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 20,
    },

    logo:{
        width: 180,
        height: 28,
        alignSelf: "center",
        marginTop:25,
    },

    LogoText:{
        
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: "center",
        marginTop:25,
        fontSize: 20,
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    titleTasks:{
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    greeting:{
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        alignSelf: "center",
    },

    userName:{
        fontSize: 22,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.text,
    },

    image:{
        width: 70,
        height: 70,
        borderRadius: 30
    },

    lenghtText:{
        color: '#fff', 
        fontSize: 35, 
        fontFamily: fonts.text,
    },

    tasks:{
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground:{
        backgroundColor: '#333333'
    },

    tasksText:{
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },

    logout:{
        position: 'absolute',
        right: 0,
        color: colors.red,
        alignSelf: "center"
    },

    

    CardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        color: '#fff',
        backgroundColor: '#72c600',
        textAlign: 'center',
        fontSize: 15,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        fontFamily: fonts.text,
    },

    CardContainer:{
        width: '78%',
        alignSelf: "center",
        paddingTop: 20, 
        marginBottom: 30,

    },

    Card:{
        backgroundColor: '#72c600',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        paddingTop: 20,
        paddingBottom: 40, 
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
        
    },

    CardrText:{
        fontSize: 15,
        color: '#fff',
        fontFamily: fonts.text,
        alignSelf: "flex-end"
    },

    CardlText:{
        fontSize: 15,
        color: '#fff',
        fontFamily: fonts.text,
        alignSelf: "flex-start"
    },



    CardlTexthigh:{
        fontSize: 30,
        color: '#fff',
        fontFamily: fonts.text,
        
    },

    CardrTexthigh:{
        flex: 1,
        justifyContent: 'space-between',
        fontSize: 30,
        color: '#fff',
        fontFamily: fonts.text,
    },

    CardFooter:{
        borderTopColor: '#fff',
        paddingTop: 4, 
        paddingBottom: 4, 
        borderTopWidth: 1,
        color: '#fff',
        backgroundColor: '#4f9b2a',
        textAlign: 'center',
        fontSize: 15,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        fontFamily: fonts.text,
    },

    CardiconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    TextosStart:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    TextosEnd:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    textProgress:{
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle:{
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#000',
    },

    textProgressContainer:{
        alignSelf: "center",
        marginRight: 20,
    },

    numberInside:{
        fontFamily: fonts.text,
        fontSize: 25,
        color: '#000',
        textDecorationLine: 'underline',

    },

    containerFloat:{
        bottom: 20,
        right: 20,
        position: 'absolute',
        backgroundColor: 'green',
        borderRadius: 10,
        zIndex: 9,
        width: 50,
        height: 50,
        justifyContent: "center",
    },
    CartButton:{
        justifyContent: "center",
        alignItems: "center",
    },
    
})