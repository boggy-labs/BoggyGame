/**
 * Rule Text /rules
 */
export const RULES_TEXT = `
<b>
You can chat with the robot and click [connect wallect] to connect your wallet\n
1.you need to create(/create) a game wallet and transfer a small amount of sol and BOGGY tokens inward\n
2.You can send '/game [amount]' create a game(default amount:500),and the Pker reply /pk with [GAME](need enough sol and BOGGY)\n
3.Waiting for the results, the winner will receive the bonus set by the game creator\n
4.The [Scissors] will win [Paper],[Parer] will win [Rock],[Rock] will win [Scissors]\n
5.You Can at /wallet,draw you all token in you connect wallet\n
[Create With #BOGGY #WalletConnet]
</b>`;
/**
 * Help Text /help
 */
export const HELP_TEXT = `
<b>Welcome!</b>\n
<b>Here are the available commands:</b>
<b>[/create]         Create your game wallet [DM*]</b>
<b>[/wallet]         Show your wallet Info and Draw [DM*]</b>\n\
<b>[/game]           Create Game with amount</b>
<b>[/pk]             Reply the Game Message and Pk it</b>
<b>[/rules]          View more detailed game rules</b>
<b>[/genimg]         Generate an image based on input</b>
<b>The [DM*] need DM Bot</b>
        `;
export const WELCOME_TEXT = `
        <b>
Welcome to the BoggyGame!\n
There will be BOGGY [Rock-Scissors-Paper] game here\n
For assistance, please enter [/help] to get more information.\n
Send [/rules] get Game Rules.\n
</b>
    `;
/**
 * Welcome Text /start
 */
export const CREATE_WALLET_TEXT = `You not have wallet info, you need send [/create] create one game wallet!</b>`;

export const SHOW_WALLET_TEXT = `<b>You need DM the @boggy_game_bot send [/wallet] show wallet Info</b>`;

export const CONNECT_WALLET = `<b>Please click the [Connect Wallet] button to connect your wallet!</b>`;

export const CONFIRM_TEXT = `<b>Drawing BOGGY,Please confirm signature on wallet</b>`;

export const DAILY_CHECK_TEXT = `Daily Check Award! --Power By Telegram BOT:BoggyGame(@boggy_game_bot)`;

export const transferText = (amount: number, username: string) =>
  `<b>The award amount ${amount} BOGGY transfer end, Click 'Check Tx' Button Check @${username}</b>`;

export const removeWalletText = (username: string) =>
  `<b>Wallet linked Session Delete,Please obtain the QR code link again...@${username}</b>`;

export const walletInfoText = (
  publicKey: string,
  solBalance: number,
  tokenBalance: number
) => `
<i>You Wallet Info:</i>\n
<b>WALLET: <a>${publicKey}</a></b>\n
<b>SOL: ${solBalance} SOL</b>\n
<b>BOGGY: ${tokenBalance} BOGGY</b>\n
<i>Click the menu to draw from your wallet</i>
    `;

/**
 * -----------------------------------------------CAPTION MESSAGE---------------------------------------------
 */
export const CONNECT_CAPTION =
  "<b>To proceed, please scan the QR code with your wallet application to establish a connection.</b>";

/**
 * -----------------------------------------------------------------------------------------------------------
 */
