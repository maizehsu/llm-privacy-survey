"use client";

import MessageForm from "../../components/MessageForm";
import MessagesList from "../../components/MessageList";
import NavBar from "../../components/navbar";
import { NextPage } from "next";
import { MessagesProvider } from "../../utils/useMessages";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar";

const IndexPage: NextPage = () => {
  return (
    <Navbar>
      <MessagesProvider>
        <Layout>
          <MessagesList />
          <div className="fixed bottom-0 right-0 left-0">
            <MessageForm />
          </div>
        </Layout>
      </MessagesProvider>
    </Navbar>
  );
};

export default IndexPage;
