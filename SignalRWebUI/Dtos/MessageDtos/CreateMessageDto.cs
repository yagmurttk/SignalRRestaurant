namespace SignalRWebUI.Dtos.MessageDtos
{
    public class CreateMessageDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Mail { get; set; }
        public string PhoneNumber { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public DateTime SendDate { get; set; }
        public bool MessageStatus { get; set; }
    }
}
