# Материалы
- [Дизайн]([https://www.figma.com/file/nGUP4eJGqIejCaOUPKSZF3/Untitled?type=design&mode=design&t=eLLXnxGbYjtxc9dy-0](https://www.figma.com/file/nGUP4eJGqIejCaOUPKSZF3/Untitled?type=design&node-id=0%3A1&mode=design&t=j7UqiIadjO1tcqkc-1))
- [Системная аналитика]([https://miro.com/app/board/uXjVN-gVhkg=/](https://miro.com/app/board/uXjVN-4E00I=/?share_link_id=863774664086))


# Основные настройки при деплое
Настройка settings.py
```py
ALLOWED_HOSTS = [
    '127.0.0.1',
    '0.0.0.0',
    'hostname.com'
]
```

# Настройте репозиторий
Обновите индекс ```apt``` пакета и установите пакеты, чтобы разрешить ```apt``` использование репозитория по протоколу HTTPS:
```
apt-get update
```
```
apt-get install -y \
  ca-certificates \
  curl \
  gnupg \
  lsb-release
```
Добавьте официальный GPG-ключ Docker:
```
mkdir -p /etc/apt/keyrings
```
```
curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```
Используйте следующую команду для настройки репозитория:
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
```
# Установить движок Docker
Обновите индекс ```apt``` пакета и установите последнюю версию Docker Engine, containerd и Docker Compose или перейдите к следующему шагу, чтобы установить конкретную версию:
```
apt-get update
```
Установите Docker Engine
```
apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```
