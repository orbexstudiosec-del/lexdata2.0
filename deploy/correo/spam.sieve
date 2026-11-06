require ["fileinto"];

# Rspamd añade "X-Spam: Yes" a los mensajes sospechosos.
if header :contains "X-Spam" "Yes" {
  fileinto "Junk";
  stop;
}
