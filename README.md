首先，我要感謝 Jonas Schmedtmann 老師的課程，這個專案的基礎架構完全得益於他的教導，向他致以 100 分的敬意。

這個作品使用 Vite/React 作為前端開發工具，後端資料庫選擇了 Supabase，這對於還不太熟悉後端技能的情況下來說非常方便且易用。

這個網站主要模擬一個旅館員工的幕後管理系統，具體功能如下：

登出/登入及創建新帳號功能：

確保在實際運用中能阻擋外部因素竊取內部資料。

新帳號創建必須由內建默認帳號登入後才能進行，並且需要經由 Supabase 寄出的驗證信進行驗證，驗證成功後會從信件連結進入 Dashboard。

推薦使用虛擬信箱（例如 temp mail）以避免個人隱私洩露。

個人會員中心：

用戶可以修改密碼、頭像和名稱，提升個人資料管理的便利性。

模式切換功能：

提供普通模式和適合夜晚使用的暗黑模式，確保使用者在不同光線環境下的舒適度。（右上角的月亮太陽圖標可以進行切換）

Dashboard 功能：

顯示和統計當前營業資訊，通過報表直觀展示營業額和入住情況等數據。

訂單管理：

個別查看顧客資訊，包括特殊需求和金額，並可處理入住/退房事宜。（目前使用已有資料隨機生成顧客資料）

房型設置：

設定不同房間的價格和規定。（目前使用已有資料隨機生成資料）

創建新用戶功能：

需要由默認帳號登入後才可使用，模擬新進員工需由主管創建帳戶，並需經由郵件驗證後使用。

錯誤防範設置：

設定範圍來模擬旅館最大人數設定錯誤（如最大人數應為 8 人但設為 10 人），防止此類型錯誤發生。

/////////////////English Version //////////////////////////////////////
Project Overview and Introduction

First and foremost, I would like to express my heartfelt gratitude to Jonas Schmedtmann for his course, which laid the foundation for this project. His teachings have been instrumental, and I extend my utmost respect and appreciation to him.

This project leverages Vite/React as the front-end development tools and uses Supabase for the backend database, making it exceptionally user-friendly for those who are still learning backend development.

The website primarily simulates a hotel staff management system with the following features:

Login/Logout and Account Creation:

Ensures secure data access by preventing unauthorized external access.

New accounts can only be created after logging in with the default admin account, followed by email verification sent through Supabase. Successful verification redirects the user to the Dashboard.

For privacy protection, using a virtual email service (e.g., temp mail) is recommended.

Personal Member Center:

Users can modify their password, avatar, and name, enhancing the ease of personal data management.

Theme Switching:

Provides both a standard mode for daytime and a dark mode suitable for nighttime use, ensuring user comfort in different lighting conditions. (Switchable via the sun and moon icons in the top-right corner.)

Dashboard:

Displays and analyzes current business information, offering intuitive visualizations of revenue and occupancy rates.

Order Management:

Allows viewing individual customer information, including special requests and billing details, and manages check-in/check-out processes. (Currently, customer data is randomly generated from existing data, which may result in discrepancies with actual prices.)

Room Type Settings:

Enables setting different room prices and policies. (Currently, room data is randomly generated from existing data, which may result in discrepancies with customer prices.)

New User Creation:

New users can only be created by logging in with the default admin account, simulating the process where new employees must have their accounts set up by a supervisor. The account is activated upon email verification.

Error Prevention Settings:

Implements a range to simulate hotel capacity settings (e.g., maximum occupancy set to 8 but erroneously set to 10) to prevent similar configuration errors.
