import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

async function testGeminiAPI() {
    try {
        console.log('🔑 Testing Gemini API...');
        console.log('API Key exists:', !!process.env.GEMINI_API_KEY);
        console.log('API Key length:', process.env.GEMINI_API_KEY?.length);
        
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        
        const result = await model.generateContent('Say "Hello World"');
        const response = result.response.text();
        
        console.log('✅ API Response:', response);
        console.log('✅ Gemini API is working correctly!');
    } catch (error) {
        console.error('❌ Gemini API Error:', error.message);
        console.error('Full error:', error);
    }
}

testGeminiAPI();
