
2.  Open Google Chrome and navigate to `chrome://extensions`.
3.  Enable **"Developer mode"** by toggling the switch in the top right corner.
4.  Click on **"Load unpacked"** and select the directory where you cloned this repository.

## Configuration

1.  **Set Price Threshold:**
    *   Edit the `background.js` file to set your desired price threshold.
    *   Locate the line `let PRICE_THRESHOLD = 10.0;` and change the value (`10.0`) to your preferred threshold in cents per kWh.
    ```
    let PRICE_THRESHOLD = 7.5; // Example: Set threshold to 7.5 cents/kWh
    ```
2.  **Reload Extension:**
    *   After modifying the `background.js` file, go back to the `chrome://extensions` page.
    *   Find the "ComEd Price Alert" extension and click the **"Reload"** icon.

## Usage

-   Once installed and configured, the extension runs automatically in the background.
-   It checks the ComEd electricity price every 5 minutes.
-   If the price exceeds your configured threshold, a desktop notification will appear.

## Troubleshooting

-   **Notifications Not Showing?**
    *   Ensure that Chrome notifications are enabled in your operating system settings.
    *   Check the Chrome extension settings to make sure notifications are allowed for the "ComEd Price Alert" extension.
-   **Extension Not Working?**
    *   Open the Chrome extensions page (`chrome://extensions`) and verify that the extension is enabled and has no errors.
    *   Click the "Service Worker" link to inspect the background script for any error messages.
-   **API Errors:**
    *   Check the console for any errors related to fetching data from the ComEd API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to suggest improvements or report bugs.
