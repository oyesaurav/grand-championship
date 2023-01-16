import { google } from 'googleapis';
export async function getEmojiList() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      'saurav-pati@grand-championship.iam.gserviceaccount.com',
      null,
      ("-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCeYGdj0RXC2UAp\nvNyBYRBS9bTDH6WuXVz5Iscm79EGW+IZhFEkgCW+GS0vhnOGT2LgZBFddgjwyHrX\n2HmD/E7XOKLwCAmfG36z7mL98EoYnSZ5dVk6hnlbwPq2x2lisBvkIHtp5bKo9VBW\nlhKFSqU6NM6NOqDmZuEJO3nj8R8+9BTibXA1qGIVQ1Vz0XKj12hkb7rlbvKcBTkz\nYzBEUm5c6u76vBx86XJsAJu4Aiynp04/yNTErUEM8I9V4bMYgIowAHgIYwKRa8gh\nlB2z+HFlFQAzSCzFSYhhYrwv+tSybbbRulLAPyVuNZenu54SGHGRuYOX/WXx7nRU\nqUn8rbO1AgMBAAECgf8Ty/kggQI3WPCsRu9JPNjNhekSeuI66XC1s6MxOsjmApZA\nmkmKRnpxSLRdPHE0WLgDVH7XL+nuLyEr2eNWnDM+s9WqK1cIjGdKFoJJO8AHU517\nkS+WITkKPxUXw9VogJr76ROEKTIr7H4eVKP8BVih7ffjr3BtXG7EuKqD06AUPjwF\nexc2o6rxdZ3S/OpY8/blaKvjVGJPH0VGfkfRZc6nQMuFOFc0VzV2hqGelGX0FL/Y\nhJ13jteV7FrnTZmWDdq4yvrn7klw2oDODjEt8PCmI8AjPPhg0MU+vlmev7Vd9mXR\nAxdnS/CaM33QTnZBQAvlFQOuq7xCRLb0U9yziYECgYEAzLqi+YF9GtLIYk7JFaXn\n1ggBpCDyyaLMIV2HIWQhwE0Tp7UHC6UnrO+34FdOK+yE6Ln2wHWB8m6IB3ZCBoS7\nFWlpb7b/NWQFxjhWR2dDUgyPZUgkJq+dKRC4Q+qItLkszTDH9yqRkra9JbNWoLfg\nGdX2QU73/cwcxchTJ7WfEWMCgYEAxgoRkSZUOpl2eOAyck79E5FxjGR5+90sdKe/\nnGLDradbsRWWLXJOdw5n+jcD3HdMxhuuZG3I1XhJAUJbpXaJ7pFparoaQjRGdKTF\n3GukKp/iaLM7KSdjLtSNtVynfwviy2WrGEKS04ZXsdYCyNyF7pK7/CuKELXJ5MP/\nmgvc/gcCgYAzQA2IVEgTLO0I3xwrlSqiQ8LVaYIdw+lB+P3Y+A4S67id5Q1sdt2l\nxyTKvlBNYporAFKq/z+WhuD6rTn+E8AZrhe85ZyhqvZfFr9ShKEvqwFCo3qZTKEV\nJKBcMBwk0a5Ld4i3cSqcBa73/xsShLVPAmbxFmmyWSRixrE6YZb+bQKBgDjnRbru\nR396/wambPhZZ/CKdxT+/en32EFAvhbibhVkpD0S1c8DLDabZhcIXcyoXuABri9f\nODjWUivRdGHr2KA7Gg43oTnqqV/0xIGcUFSLElRBQ7uEfMRFAN7e26XutWD6OppC\n7stmq6YGt1AdxUIS2X8Qx6AbjAJ2qugJhptbAoGAYyoVto8HOEpsRJWdXOvfMK59\nNMVy/wrbJ+Od8CGX4vh2zN5NtPKA3P9GyyABXlZ2fMPdbNauIZ98KgaUh7tPJNil\nqVDU3P0wdJi8mOtdhXAzhuRKgWbgLCu3A1UxIDwvyaozfsrIyG1BIK/4EwNpzImg\nooiX+6nwhzhvy/HBd5c=\n-----END PRIVATE KEY-----\n" || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "1an5t8XKibLViq5Sx09-qyDrllSNNfKpyY87wEv0nxRc",
      range: 'Sheet1', // sheet name
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.map((row) => ({
        row
      }));
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}