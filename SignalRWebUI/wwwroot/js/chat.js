var connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:7157/SignalRHub").build(); 
document.getElementById("sendbutton").disabled = true; // başlangıçta buton devre dışı bırakılır

connection.on("ReceiveMessage", function (user, message) { // ReceiveMessage bağlantı kurulduğunda tetiklenir
    var currentTime = new Date(); // mevcut zamanı al
    var currentHour = currentTime.getHours(); // mevcut saati al
    var currentMinute = currentTime.getMinutes(); // mevcut dakikayı al

    var li = document.createElement("li"); // yeni liste öğesi oluştur
    var span = document.createElement("span"); // yeni span öğesi oluştur
    span.style.fontWeight = "bold"; // kullanıcı adını kalın yap
    span.textContent = user; // kullanıcı adını span içine ekle
    li.appendChild(span); // span öğesini liste öğesine ekle
    li.innerHTML += ` :${message} - ${currentHour}:${currentMinute}`; // mesajı ve zamanı liste öğesine ekle
    document.getElementById("messagelist").appendChild(li); // liste öğesini mesaj listesine ekle
});

connection.start().then(function () { // bağlantı başlatıldığında
    document.getElementById("sendbutton").disabled = false; // butonu etkinleştir
}).catch(function (err) { // hata yakalama
    return console.error(err.toString()); 
});

document.getElementById("sendbutton").addEventListener("click", function (event) { // butona tıklandığında
    var user = document.getElementById("userinput").value; // kullanıcı adını al
    var message = document.getElementById("messageinput").value; // mesajı al
    connection.invoke("SendMessage", user, message).catch(function (err) { // SendMessage metodunu çağır
        return console.error(err.toString());
    });
    event.preventDefault(); // varsayılan davranışı engelle
});