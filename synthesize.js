function generateSpeech(message, voice)
{
  					let fakeEmail = [];
						for (let c = 0; c < 15; c++) fakeEmail.push(~~(65 + Math.random() * 26));
						const email = `${String.fromCharCode.apply(null, fakeEmail)}@gmail.com`;
	
						const q = new URLSearchParams({						
							msg: message,
							voice: voice,
							email
						}).toString();
						
						https.get({
							hostname: "api.voiceforge.com",
							path: `/swift_engine?${q}`,
							headers: { 
								'User-Agent': 'just_audio/2.7.0 (Linux;Android 11) ExoPlayerLib/2.15.0',
								HTTP_X_API_KEY: '8b3f76a8539',
								'Accept-Encoding': 'identity',
								'Icy-Metadata': '1',
							 }
						}, (r) => {
							return r;
						});
						break;
}
