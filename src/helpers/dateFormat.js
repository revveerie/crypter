export default function dateFormat(second) {
    let epoch = new Date(0);
    epoch.setSeconds(parseInt(second));
    var date = epoch.toISOString();
    date = date.replace('T', ' ');
    return date.split('.')[0].split(' ')[0] + ' ' + epoch.toLocaleTimeString().split(' ')[0];
}