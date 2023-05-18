"use client";

import MessageForm from "../../components/MessageForm";
import MessagesList from "../../components/MessageList";
import Toplayout from "../../components/toplayout";
import { NextPage } from "next";
import { MessagesProvider } from "../../utils/useMessages";
import Layout from "../../components/Layout";

const IndexPage: NextPage = () => {
  return (
    <Toplayout>
      <MessagesProvider>
        <Layout>
          <MessagesList />
          <div className="fixed bottom-0 right-0 left-0">
            <MessageForm />
          </div>
        </Layout>
      </MessagesProvider>
    </Toplayout>
  );
};

export default IndexPage;
