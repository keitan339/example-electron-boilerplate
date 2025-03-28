FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-22.04

# デフォルトユーザの削除
RUN userdel -r vscode

# ElectronForgeでLinux向けアプリのビルドをするために必要なパッケージ
RUN sudo apt update && sudo apt -y install rpm dpkg fakeroot

# ElectronForgeでWindows向けアプリのビルドをするために必要なパッケージ
RUN sudo dpkg --add-architecture i386 \
    && sudo apt update \
    && sudo apt -y install wine64 wine32 mono-xsp4

# DevContainerでElectronを実行するために必要なパッケージ
RUN sudo apt update && sudo apt -y install libnss3-dev libgdk-pixbuf2.0-dev libgtk-3-dev libxss-dev libasound2 fonts-noto fonts-ipafont fonts-ubuntu fonts-roboto
